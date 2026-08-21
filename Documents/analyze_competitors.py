import asyncio
import json
import os
from playwright.async_api import async_playwright

urls = [
    "https://hkhr.ru",
    "https://www.artrobots.art/services",
    "https://wallprint.ru",
    "https://wds.moscow",
    "https://mechanical-art.ru",
    "https://print-wall.ru"
]

output_dir = "competitors_data"
os.makedirs(output_dir, exist_ok=True)


async def analyze_page(page, url):
    try:
        await page.goto(url, wait_until="domcontentloaded", timeout=45000)
    except Exception as e:
        print(f"Failed to load {url}: {e}")
        return {"url": url, "error": str(e)}

    # Scroll down to trigger lazy loading and animations
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    await asyncio.sleep(2)
    await page.evaluate("window.scrollTo(0, 0)")
    await asyncio.sleep(1)

    # Extract basic info
    title = await page.title()
    
    # Extract computed styles for body
    body_styles = await page.evaluate('''() => {
        const body = document.body;
        const styles = window.getComputedStyle(body);
        return {
            backgroundColor: styles.backgroundColor,
            color: styles.color,
            fontFamily: styles.fontFamily
        };
    }''')

    # Detect animations or transitions
    animations = await page.evaluate('''() => {
        const elements = document.querySelectorAll('*');
        let hasAnimations = false;
        let hasTransitions = false;
        for (let el of elements) {
            const styles = window.getComputedStyle(el);
            if (styles.animationName && styles.animationName !== 'none') hasAnimations = true;
            if (styles.transitionDuration && parseFloat(styles.transitionDuration) > 0) hasTransitions = true;
            if (hasAnimations && hasTransitions) break;
        }
        return { hasAnimations, hasTransitions };
    }''')

    # Text content (first 1000 chars of body) to see what they say
    text_content = await page.evaluate("document.body.innerText")
    text_preview = text_content[:1000].replace('\\n', ' ') if text_content else ""

    # Try to find CTA buttons
    ctas = await page.evaluate('''() => {
        const buttons = Array.from(document.querySelectorAll('button, a'));
        return buttons
            .filter(b => b.innerText && (b.innerText.toLowerCase().includes('заказ') || b.innerText.toLowerCase().includes('звон') || b.innerText.toLowerCase().includes('расч')))
            .map(b => b.innerText.trim())
            .slice(0, 5);
    }''')

    # Screenshot
    domain = url.split("//")[1].replace("/", "_")
    screenshot_path = os.path.join(output_dir, f"{domain}.png")
    await page.screenshot(path=screenshot_path, full_page=True)

    return {
        "url": url,
        "title": title,
        "body_styles": body_styles,
        "animations": animations,
        "ctas": ctas,
        "text_preview": text_preview,
        "screenshot": screenshot_path
    }

async def main():
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1920, "height": 1080})
        
        for url in urls:
            print(f"Analyzing {url}...")
            page = await context.new_page()
            data = await analyze_page(page, url)
            results.append(data)
            await page.close()
            
        await browser.close()

    result_file = os.path.join(output_dir, "analysis.json")
    with open(result_file, "w", encoding="utf-8-sig") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"Analysis saved to {result_file}")

if __name__ == "__main__":
    asyncio.run(main())
