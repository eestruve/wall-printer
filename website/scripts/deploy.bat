@echo off
echo Building the project...
npm run build

echo Deploying via WSL rsync...
wsl rsync -avz --delete dist/ dro7588192@ssh.dro7588192.nichost.ru:/home/dro7588192/droidprint.ru/docs/

echo Done! Check https://droidprint.ru
pause
