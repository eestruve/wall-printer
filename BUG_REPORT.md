# 🐛 Bug Report — Wall Printer Landing

Дата: 2026-03-18 (обновлено 22:37)
Метод: Ручной code review + `frontend-code-review` / `code-review` чек-листы + QA пользователя

---

## 🔴 Критические баги (URGENT)

### BUG-001: Неработающая ссылка телефона в Header
**Файл:** `src/components/Header.jsx`, строка 37
**Проблема:** Используется `${siteInfo.phone}` внутри обычной строки, а не template literal. Ссылка ведёт на `tel:${siteInfo.phone}` (буквально), а не на номер.
```jsx
// ❌ Текущий код
<a href="tel:${siteInfo.phone}" className="header__phone">
// ✅ Должно быть
<a href={`tel:${siteInfo.phone}`} className="header__phone">
```

### BUG-002: IntersectionObserver не подхватывает динамически рендерящиеся элементы
**Файл:** `src/App.jsx`, строки 15-31
**Проблема:** `useEffect` запускается однократно при монтировании App, но `.fade-in` элементы внутри дочерних компонентов могут быть ещё не отрисованы. `querySelectorAll('.fade-in')` может найти 0 элементов при первом рендере.
**Решение:** Добавить `setTimeout` или использовать `MutationObserver`, либо перенести наблюдение в каждый компонент через хук `useScrollReveal`.

### BUG-003: Контентная ошибка в Use Cases данных
**Файл:** `src/data/siteData.js`, строка 84-85
**Проблема:** У кейса "Рестораны и стены" subtitle = 'IT-сфера' — несоответствие между заголовком и подзаголовком. Должно быть 'HoReCa' или 'Рестораны'.

---

## 🟡 Предупреждения (WARNING)

### BUG-004: Labels не связаны с inputs через htmlFor/id
**Файл:** `src/components/CTAForm.jsx`, строки 29-49
**Проблема:** `<label>` не имеют атрибута `htmlFor`, а `<input>` не имеют `id`. Клик по лейблу не фокусирует инпут — ухудшает UX и accessibility.
```jsx
// ❌ Текущий код
<label className="cta-form__label">{ctaForm.fields.name}</label>
<input type="text" className="cta-form__input" ... />
// ✅ Должно быть
<label htmlFor="cta-name" className="cta-form__label">{ctaForm.fields.name}</label>
<input id="cta-name" type="text" className="cta-form__input" ... />
```

### BUG-005: Форма не валидирует телефонный номер
**Файл:** `src/components/CTAForm.jsx`
**Проблема:** `type="tel"` не обязывает вводить корректный формат телефона. Нет pattern или маскирования. Пользователь может отправить любой текст.

### BUG-006: File upload не сбрасывается после отправки формы
**Файл:** `src/components/CTAForm.jsx`, строка 12
**Проблема:** `handleSubmit` не сбрасывает `fileName` и `formData` после отправки.

### BUG-007: Отсутствует favicon
**Файл:** `index.html`, строка 11
**Проблема:** Ссылка на `vite.svg` (дефолтный favicon от Vite). Нужен собственный favicon Solution Club.

### BUG-008: data сomments на русском — CSS-файл начинается с блочного комментария
**Файл:** `src/data/siteData.js`, строки 1-4
**Проблема:** Используется CSS-стиль комментария `/* ... */` в JS-файле. Работает, но не идиоматично для JS.

### BUG-009: Бургер-меню не закрывается при клике вне меню
**Файл:** `src/components/Header.jsx`
**Проблема:** Нет обработчика клика вне меню для его автоматического закрытия на мобильных устройствах.

### BUG-010: Нет конфигурации для GitHub Pages (base URL)
**Файл:** `vite.config.js`
**Проблема:** При деплое на GitHub Pages нужно указать `base: '/wall-printer/'` в конфигурации Vite, иначе все пути к ассетам будут сломаны.

---

## 🔵 Рекомендации (SUGGESTIONS)

### BUG-011: Нет <noscript> fallback
**Файл:** `index.html`
**Проблема:** Если JavaScript отключён, пользователь увидит пустую страницу.

### BUG-012: Emoji в секции Features вместо SVG/иконок
**Файл:** `src/components/Features.jsx`
**Проблема:** Используются emoji (🖨️, 📐, 🖼️) вместо SVG-иконок. На разных платформах emoji выглядят по-разному и не масштабируются.

### BUG-013: Footer — нерабочие ссылки для партнёров
**Файл:** `src/components/Footer.jsx`, строки 35-37
**Проблема:** Ссылки "Дизайнерам", "Архитекторам", "Партнёрская программа" ведут на `#` — заглушки.

### BUG-014: Production build не настроен
**Проблема:** Нет скрипта для сборки + деплоя на GitHub Pages (gh-pages пакет не установлен).

### BUG-015: Не настроен robots.txt и sitemap.xml
**Проблема:** Отсутствуют файлы для SEO-индексации.

### BUG-016: OG Image не задан
**Файл:** `index.html`
**Проблема:** Нет `<meta property="og:image">` — при шаринге ссылки не будет превью.

---

## 📊 Статистика

| Категория | Количество |
|-----------|-----------|
| 🔴 Критические | 3 |
| 🟡 Предупреждения | 7 |
| 🔵 Рекомендации | 6 |
| **Всего** | **16** |

---

## 🔧 Инструменты аудита

| Инструмент | Статус |
|-----------|--------|
| `frontend-code-review` (skill) | ✅ Установлен, использован |
| `code-review` (skill) | ✅ Использован |
| `audit-website` / squirrel CLI | ❌ Не удалось установить (EPERM symlink) |
| Browser QA testing | ❌ Gemini Flash недоступен (503) |

> [!NOTE]
> Рекомендуется повторить аудит через `squirrel audit http://localhost:5173 --format llm` после установки CLI, чтобы получить полный автоматизированный отчёт по 230+ правилам.
