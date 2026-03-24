@echo off
cd /d "%~dp0"
echo Starting Wall Printer local server...
echo.
echo The website should open automatically in your browser.
echo If it does not, go to http://localhost:5173/wall-printer/
echo.
echo To stop the server, close this window.
echo.
call npm run dev -- --open --host 127.0.0.1 --port 3000
pause
