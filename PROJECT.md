# Проект «Wall Printer» (DroidPrint) — Интерьерная УФ-печать на стенах

## 1. Описание проекта
**Wall Printer (DroidPrint)** — сервис высокотехнологичной вертикальной интерьерной печати на любых поверхностях (стены, фасады, кирпич, бетон, дерево, стекло, фактурная штукатурка) с помощью промышленного робота-принтера. Услуга премиум-сегмента (High-Ticket, чек от 45 000 руб).

* **Главное УТП**: Мы продаем не просто печать, а законченный результат **«под ключ»** в партнерстве со строительной компанией **Solution Club** (полный цикл: финишная подготовка стен, шпаклевка, электрика, розетки, идеальное нанесение и гарантия).
* **Целевая аудитория (AJTBD)**:
  1. **B2B HoReCa (Кафе, рестораны, отели)** — «Обновление за 1 ночь без запаха и простоя бизнеса».
  2. **B2B Офисы и IT-пространства** — «Корпоративный брендинг и навигация на бетоне/стекле».
  3. **B2C Премиум интерьеры** — «Эксклюзивный арт-объект без строительной грязи и риска».
  4. **Дизайнеры и архитекторы** — «100% реализация 3D-рендера в реальности + партнерская программа».
  5. **B2G и образовательные учреждения** — «Безопасные эко-чернила, долговечность».

---

## 2. Архитектура и Инфраструктура

### Домен и Хостинг
* **Домен**: `droidprint.ru` (https://droidprint.ru)
* **Хостинг / Сервер**: Nichost (Ru-Center / Hosting)
* **SSH / SFTP доступ**: `dro7588192@ssh.dro7588192.nichost.ru`
* **Продакшен-директория**: `/home/dro7588192/droidprint.ru/docs/`

### Технологический стек (Фронтенд)
* **Фреймворк**: React 19 + Vite 8
* **Роутинг**: `react-router-dom` v7
* **Стилизация**: CSS-модули / БЭМ, единые дизайн-токены (`src/styles/design-tokens.css`), Glassmorphism, Dark UI.
* **Маски ввода**: `react-imask` (для валидации телефонов).

---

## 3. Структура проекта

```
wall-printer/
├── .agents/                    # Инструкции и правила для ИИ-агентов (AGENTS.md)
├── Documents/                  # Бизнес-аналитика, исследования, JTBD и ТЗ
│   ├── CLIENT_SEGMENTS_AJTBD.md # Анализ целевых сегментов и болей
│   ├── COMPETITORS_ANALYSIS.md # Анализ 5 ключевых конкурентов
│   ├── FINAL_LANDING_STRUCTURE.md # Финальная структура лендинга
│   ├── DESIGN.md               # Гайдлайн по UI/UX и цветам
│   ├── PROJECT_CONTEXT.md      # Оперативный контекст проекта
│   └── *.docx                  # Исходные ТЗ и ответы клиента
├── website/                    # Исходный код веб-приложения (React + Vite)
│   ├── docs/                   # Техническая документация сайта, SEO, баг-репорты
│   │   ├── BUG_REPORT.md       # Трекер багов и задач
│   │   ├── PRIVACY_POLICY.md   # Политика конфиденциальности
│   │   ├── SEMANTIC_CORE.md    # SEO семантическое ядро
│   │   └── plans/              # Архитектурные планы страниц
│   ├── public/                 # Статические файлы, sitemap.xml, robots.txt, иконки
│   ├── scripts/                # Скрипты деплоя (deploy.bat, deploy.sh)
│   ├── src/
│   │   ├── assets/             # Изображения, видеоролики, SVG
│   │   ├── components/         # React-компоненты (Hero, Comparison, CTAForm, etc.)
│   │   ├── data/               # Статические данные (siteData.js)
│   │   ├── pages/              # Страницы роутера (HomePage, B2B-страницы, Tech-страницы)
│   │   ├── styles/             # Глобальные токены (design-tokens.css)
│   │   ├── App.jsx             # Корневой компонент с роутингом
│   │   └── main.jsx            # Входная точка Vite
│   ├── dist/                   # Скомпилированный production-билд
│   ├── package.json            # Зависимости и скрипты
│   └── vite.config.js          # Конфигурация сборщика Vite
└── PROJECT.md                  # 🌟 ЕДИНСТВЕННЫЙ ИСТОЧНИК ФАКТОВ О ПРОЕКТЕ
```

---

## 4. Маршрутизация и Страницы сайта

| Путь (URL) | Компонент | Назначение |
|------------|-----------|------------|
| `/` | [`HomePage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/HomePage.jsx) | Главный продающий лендинг (Hero, Bento Grid, Сравнение, Кейсы, Под ключ, FAQ, CTA) |
| `/designers` | [`DesignersPage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/DesignersPage.jsx) | Посадочная страница для дизайнеров интерьера (партнерская программа) |
| `/architects` | [`ArchitectsPage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/ArchitectsPage.jsx) | Страница для архитекторов и проектировщиков |
| `/partners` | [`PartnersPage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/PartnersPage.jsx) | Страница для партнеров, девелоперов и строительных компаний |
| `/technology/uv-printing` | [`TechUVPrintingPage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/TechUVPrintingPage.jsx) | Статья-разбор технологии УФ-отверждения чернил |
| `/technology/wall-preparation` | [`TechWallPrepPage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/TechWallPrepPage.jsx) | Гайд по подготовке стен под ключ от Solution Club |
| `/technology/printer-specs` | [`TechPrinterSpecsPage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/TechPrinterSpecsPage.jsx) | Спецификации робота-принтера, лазерное сканирование |
| `/privacy` | [`PrivacyPage.jsx`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/src/pages/PrivacyPage.jsx) | Политика конфиденциальности (152-ФЗ РФ) |

---

## 5. Воркфлоу разработки и деплоя

### Локальный запуск
```powershell
cd website
npm install
npm run dev
```

### Сборка и Деплой на продакшен (droidprint.ru)
1. **Сборка проекта**:
   ```powershell
   cd website
   npm run build
   ```
2. **Деплой через WSL rsync** (или запуск [`website/scripts/deploy.bat`](file:///c:/Users/evgen/Desktop/Antigravity/NEWprodject/06_experiments/src/wall-printer/website/scripts/deploy.bat)):
   ```bash
   wsl rsync -avz --delete dist/ dro7588192@ssh.dro7588192.nichost.ru:/home/dro7588192/droidprint.ru/docs/
   ```
3. Проверить результат на https://droidprint.ru.
