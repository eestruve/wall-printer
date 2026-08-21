#!/bin/bash
# Сборка проекта
npm run build

# Деплой через rsync на RU-CENTER
echo "Начинаю загрузку файлов на сервер..."
rsync -avz --delete dist/ dro7588192@ssh.dro7588192.nichost.ru:/home/dro7588192/droidprint.ru/docs/

echo "Деплой завершен! Проверьте https://droidprint.ru"
