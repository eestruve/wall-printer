// ============================================
// Site Data — Волл Принтер от Солюшн Клаб
// All static text and content decoupled from components
// ============================================

import heroImg from '../assets/images/hero.png';
import restaurantImg from '../assets/images/usecase_restaurant.png';
import officeImg from '../assets/images/usecase_office.png';
import interiorImg from '../assets/images/usecase_interior.png';
import architectImg from '../assets/images/usecase_architect.png';
import compManualImg from '../assets/images/comparison_manual.png';
import compPanelsImg from '../assets/images/comparison_panels.png';
import compPrinterImg from '../assets/images/comparison_printer.jpg';
import video0324 from '../assets/videos/0324.mp4';
import video1 from '../assets/videos/1.mp4';
import schoolPreview from '../assets/images/school_preview.png';
import afgPreview from '../assets/images/afg_preview.jpg';

export const siteInfo = {
  brand: 'Солюшн Клаб',
  phone: '+7 (495) 000-00-00',
  whatsapp: 'https://wa.me/74950000000',
  telegram: 'https://t.me/solutionclub',
  email: 'info@solution.club',
  address: 'Москва, ул. Цветного, 40',
};

export const navigation = [
  { label: 'Услуги', href: '/#use-cases' },
  { label: 'Кейсы', href: '/#social-proof' },
  { label: 'Технология', href: '/#features' },
  { label: 'FAQ', href: '/#faq' },
];

export const hero = {
  tagline: 'Инновации в интерьере и дизайне',
  title: 'Эксклюзивная интерьерная печать на стенах.',
  subtitle: 'Свежий и чистый ремонт за 1 день — без грязи, запаха и потери денег из-за простоя. 100% совпадение с макетом до пикселя.',
  ctaPrimary: 'Заказать расчет проекта',
  ctaSecondary: 'Смотреть процесс',
  badge: 'Точность ± 0.1мм',
  image: heroImg,
};

export const comparison = {
  title: 'Сравнение решений',
  subtitle: 'Почему современные дизайнеры выбирают Волл Принтер',
  items: [
    {
      title: 'Ручная роспись',
      image: compManualImg,
      cons: [
        '2+ недели работы на 1 стену',
        'Человеческий фактор на каждом этапе',
        'Запах краски неделями',
      ],
      highlighted: false,
    },
    {
      title: 'Премиальные панели',
      image: compPanelsImg,
      cons: [
        'Видимые швы и стыки',
        'Сложный и рискованный монтаж',
        'Риск повреждения при доставке',
      ],
      highlighted: false,
    },
    {
      title: 'Наше решение',
      image: compPrinterImg,
      badge: 'ВЫБОР ПРОФИ',
      pros: [
        'Готовность менее чем за 1 день',
        'Фоторазрешение 720×1440 DPI',
        'Без запаха. Без мусора. Без пыли.',
      ],
      highlighted: true,
    },
  ],
};

export const useCases = {
  title: 'Сферы применения',
  subtitle: 'Создаём уникальные пространства, которые говорят за вас',
  items: [
    {
      title: 'Рестораны и стены',
      subtitle: 'HoReCa',
      description: 'Обновление за 1 ночь. Ночью печатаем фотозону — утром вы открываетесь.',
      image: restaurantImg,
    },
    {
      title: 'Брендинг пространства',
      subtitle: 'Офисы',
      description: 'Корпоративный брендинг на бетоне, кирпиче, стекле.',
      image: officeImg,
    },
    {
      title: 'Интерьеры',
      subtitle: 'Частные дома',
      description: 'Превратите гостиную в арт-объект без строительного мусора.',
      image: interiorImg,
    },
    {
      title: 'Архитекторы',
      subtitle: 'Дизайнерам',
      description: 'Воплощение 3D-рендера в жизнь. Партнерская программа.',
      image: architectImg,
    },
  ],
};

export const features = {
  title: 'Яркость глянцевого журнала',
  items: [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>',
      title: '720×1440 DPI',
      description: 'Потрясающее разрешение для интерьерной печати. Фотографическая четкость с идеальной цветопередачей.',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="2"></circle><path d="M12 10V6"></path><path d="M12 18v-4"></path><path d="M10 12H6"></path><path d="M18 12h-4"></path></svg>',
      title: 'Лазерное сканирование',
      description: 'Робот автоматически сканирует поверхность стены и корректирует печать без искажений на кирпиче и рельефах.',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
      title: 'Эффект паспарту',
      description: 'Технологичные отступы от краёв создают эффект студийного холста, визуально превращая принт в арт-объект.',
    },
  ],
};

export const guarantee = {
  title: 'Проект',
  titleAccent: 'Под Ключ',
  description: 'Мы объединили инновационную печать и профессиональный строительный сервис. Подразделение Солюшн Клаб берет на себя всю подготовку — от выравнивания стен и электрики до защиты интерьера, гарантируя идеальный результат без вашего погружения в рутину.',
  stats: [
    { value: '2 Года', label: 'гарантии' },
    { value: '10+ Лет', label: 'стойкости краски' },
  ],
  items: [
    'Подготовка стен: шпатлёвка, выравнивание, грунтовка',
    'Электрика: монтаж бра, розеток, подсветки',
    'Безупречная чистота: защита пола и мебели',
  ],
};

export const socialProof = {
  title: 'Доверие экспертов',
  items: [
    {
      title: 'Видео: Процесс печати в Центре естественного восстановления AFG',
      type: 'video',
      url: video0324,
      poster: afgPreview,
    },
    {
      title: 'Видео: Процесс печати в государственной школе',
      type: 'video',
      url: video1,
      poster: schoolPreview,
    },
  ],
};

export const faq = {
  title: 'Часто задаваемые вопросы',
  items: [
    {
      question: 'На каких поверхностях можно печатать?',
      answer: 'Мы печатаем практически на любых вертикальных поверхностях: штукатурка, кирпич, дерево, металл, стекло, гипс и даже пластик. Главное условие — поверхность должна быть чистой.',
    },
    {
      question: 'Безопасны ли чернила?',
      answer: 'Да, мы используем экологичные UV-чернила, которые моментально застывают под ультрафиолетом. Они абсолютно без запаха и безопасны для детей и домашних животных.',
    },
    {
      question: 'Как подготовить стену к печати?',
      answer: 'Если стена относительно ровная — робот напечатает без подготовки. Для музейного качества наша бригада за 1-2 дня выровняет и подготовит идеальную поверхность.',
    },
    {
      question: 'Сколько времени занимает печать?',
      answer: 'Скорость печати — до 10 кв.м в час. Средний проект (10-15 кв.м) закрывается за один рабочий день, включая подготовку.',
    },
    {
      question: 'Какова минимальная стоимость?',
      answer: 'Базовый пакет под ключ: выезд инженера, доставка оборудования и печать полотна до 3 кв.м — от 45 000 руб. Далее стоимость зависит от площади и сложности.',
    },
  ],
};

export const ctaForm = {
  title: 'Готовы преобразить\nваше пространство?',
  description: 'Заполните форму и получите расчёт стоимости вашего проекта в течение 15 минут, а также бесплатную визуализацию.',
  priceAnchor: 'от 45 000 ₽ за базовый пакет',
  submitText: 'Получить расчёт и визуализацию',
  fields: {
    name: 'Имя',
    namePlaceholder: 'Как вас зовут?',
    phone: 'Номер телефона',
    phonePlaceholder: '+7 (___) ___-__-__',
    fileWall: 'Фотография вашей стены',
    fileWallHint: 'Для точной визуализации',
    fileSketch: 'Эскиз или пример рисунка',
    fileSketchHint: 'То, что хотите напечатать',
    optionalNote: 'Файлы прикреплять не обязательно — мы все обсудим по телефону',
  },
};
