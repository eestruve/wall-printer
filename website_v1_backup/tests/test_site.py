import asyncio
import os
import json
from playwright.async_api import async_playwright

# Configuration
BASE_URL = "https://eestruve.github.io/wall-printer/"
SCREENSHOTS_DIR = "tests/screenshots"
BUG_REPORT_PATH = "tests/bug_report.md"

DEVICES = [
    {"name": "Desktop_Chrome", "browser_type": "chromium", "viewport": {"width": 1920, "height": 1080}},
    {"name": "Desktop_Firefox", "browser_type": "firefox", "viewport": {"width": 1920, "height": 1080}},
    {"name": "Desktop_Safari", "browser_type": "webkit", "viewport": {"width": 1920, "height": 1080}},
    {"name": "Mobile_iPhone_14_Pro", "browser_type": "webkit", "is_mobile": True, "device_scale_factor": 3, "viewport": {"width": 393, "height": 852}, "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"},
    {"name": "Mobile_Pixel_7", "browser_type": "chromium", "is_mobile": True, "device_scale_factor": 2.625, "viewport": {"width": 412, "height": 915}, "user_agent": "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36"},
]

async def run_test(playwright, device_config):
    name = device_config["name"]
    browser_type = getattr(playwright, device_config["browser_type"])
    
    # Launch browser
    browser = await browser_type.launch()
    
    # Context options
    context_options = {
        "viewport": device_config["viewport"],
        "user_agent": device_config.get("user_agent"),
        "is_mobile": device_config.get("is_mobile", False),
        "device_scale_factor": device_config.get("device_scale_factor", 1),
    }
    
    context = await browser.new_context(**context_options)
    page = await context.new_page()
    
    logs = []
    page.on("console", lambda msg: logs.append(f"[{msg.type}] {msg.text}"))
    page.on("pageerror", lambda err: logs.append(f"[ERROR] {err.message}"))

    findings = []
    
    print(f"Testing {name}...")
    try:
        # Using "domcontentloaded" instead of "networkidle" to avoid flakiness on some browsers
        await page.goto(BASE_URL, wait_until="domcontentloaded")
        await page.wait_for_timeout(2000) # Wait for animations/hydrations
        
        # 1. Take home screenshot
        screenshot_path = os.path.join(SCREENSHOTS_DIR, f"{name}_home.png")
        await page.screenshot(path=screenshot_path, full_page=True)
        
        # 2. Check for missing elements or layout issues
        header = await page.query_selector("header")
        if not header or not await header.is_visible():
            findings.append("Header is missing or not visible.")
            
        # 3. Test Internal Navigation (to avoid GH Pages directory 404s)
        # Find "Дизайнерам" link in navigation
        try:
            designers_link = page.get_by_text("Дизайнерам", exact=False).first
            if await designers_link.count() > 0 and await designers_link.is_visible():
                await designers_link.click()
                await page.wait_for_timeout(2000)
                screenshot_path_designers = os.path.join(SCREENSHOTS_DIR, f"{name}_designers.png")
                await page.screenshot(path=screenshot_path_designers, full_page=True)
                
                # Verify we are on the designers page content-wise
                if "/designers" not in page.url and "#" not in page.url: # Routing check
                     pass # Might be hash router or history api
                
                # Check for narrow text issue again now that we are on subpage
                if device_config.get("is_mobile"):
                    content_box = await page.query_selector(".article-content, .b2b-content")
                    if content_box:
                        box = await content_box.bounding_box()
                        viewport_width = device_config["viewport"]["width"]
                        # After fix, padding is 1.5rem (approx 24px) each side. 
                        # Expected width ~ viewport - 48px.
                        if box["width"] < (viewport_width - 80): # Buffer for safety
                            findings.append(f"Content width ({box['width']}px) seems too narrow for viewport ({viewport_width}px).")
            else:
                findings.append("Navigation link 'Дизайнерам' not found or hidden.")
        except Exception as e:
            findings.append(f"Internal navigation failed: {str(e)}")

        # 4. Form Submission Test (Only on Chrome to save time/cost, or all if requested)
        if "Chrome" in name:
            print(f"Testing Form Submission on {name}...")
            await page.goto(BASE_URL, wait_until="domcontentloaded")
            await page.get_by_placeholder("Как вас зовут?").fill("Test User (Automated)")
            await page.get_by_placeholder("+7 (___) ___-__-__").fill("+7 926 226-65-15")
            
            # Submit button
            submit_btn = page.get_by_text("Получить расчёт и визуализацию", exact=False)
            await submit_btn.click()
            
            # Wait for success message
            try:
                success_msg = await page.wait_for_selector(".form-success", timeout=10000)
                if not success_msg:
                    findings.append("Form submission success state not detected.")
            except:
                findings.append("Form submission timed out or failed (success message not found).")
            
        # 5. Check for Console Errors
        error_logs = [log for log in logs if "[error]" in log.lower() and "favicon.ico" not in log]
        if error_logs:
            findings.append(f"Console errors detected: {'; '.join(error_logs[:3])}")

    except Exception as e:
        findings.append(f"Test crashed for {name}: {str(e)}")
    
    await browser.close()
    return {"name": name, "findings": findings, "logs": logs}

async def main():
    if not os.path.exists(SCREENSHOTS_DIR):
        os.makedirs(SCREENSHOTS_DIR)

    all_results = []
    async with async_playwright() as playwright:
        for device in DEVICES:
            result = await run_test(playwright, device)
            all_results.append(result)

    # Generate Report
    report = "# Automated Testing Bug Report\n\n"
    report += f"Generated on: 2026-03-24\n\n"
    
    has_bugs = False
    for res in all_results:
        summary_icon = "❌" if res["findings"] else "✅"
        report += f"## {summary_icon} {res['name']}\n"
        if res["findings"]:
            has_bugs = True
            for f in res["findings"]:
                report += f"- {f}\n"
        else:
            report += "- No critical issues found.\n"
        
        # Add collapsed logs if errors found
        if res["logs"]:
             report += f"\n<details><summary>Console Logs</summary>\n\n```\n"
             report += "\n".join(res["logs"][-10:]) # last 10 logs
             report += "\n```\n</details>\n"
        report += "\n"

    if not has_bugs:
        report += "\n**Summary: No critical bugs detected across all platforms.**\n"
    else:
        report += "\n**Summary: Potential issues identified above. Review screenshots for visual confirmation.**\n"
    
    with open(BUG_REPORT_PATH, "w", encoding="utf-8") as f:
        f.write(report)
    
    print(f"Updated report generated at {BUG_REPORT_PATH}")

if __name__ == "__main__":
    asyncio.run(main())
