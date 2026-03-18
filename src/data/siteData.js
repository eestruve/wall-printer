// ============================================
// Site Data — Wall Printer by Solution Club
// All static text and content decoupled from components
// ============================================

import heroImg from '../assets/images/hero.png';
import restaurantImg from '../assets/images/usecase_restaurant.png';
import officeImg from '../assets/images/usecase_office.png';
import interiorImg from '../assets/images/usecase_interior.png';
import architectImg from '../assets/images/usecase_architect.png';
import compManualImg from '../assets/images/comparison_manual.png';
import compPanelsImg from '../assets/images/comparison_panels.png';
import compPrinterImg from '../assets/images/comparison_printer.png';

export const siteInfo = {
  brand: 'Solution Club',
  phone: '+7 (495) 000-00-00',
  whatsapp: 'https://wa.me/74950000000',
  telegram: 'https://t.me/solutionclub',
  email: 'info@solution.club',
  address: 'Москва, ул. Цветного, 40',
};

export const navigation = [
  { label: 'Услуги', href: '#use-cases' },
  { label: 'Кейсы', href: '#social-proof' },
  { label: 'Технология', href: '#features' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  tagline: 'Инновации в интерьере и дизайне',
  title: 'Эксклюзивная интерьерная печать на стенах.',
  subtitle: 'Свежий и чистый ремонт за 1 день — без грязи, запаха и потери денег из-за простоя. 100% совпадение с макетом до пикселя.',
  ctaPrimary: 'Узнать стоимость проекта',
  ctaSecondary: 'Смотреть процесс',
  badge: 'Точность ± 0.1мм',
  image: heroImg,
};

export const comparison = {
  title: 'Сравнение решений',
  subtitle: 'Почему современные дизайнеры выбирают Wall Printer',
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
      title: 'Wall Printer Solution Club',
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
      icon: '🖨️',
      title: '720×1440 DPI',
      description: 'Потрясающее разрешение для интерьерной печати. Фотографическая четкость с идеальной цветопередачей.',
    },
    {
      icon: '📐',
      title: '3D Лазерное сканирование',
      description: 'Робот автоматически сканирует поверхность стены и корректирует печать без искажений на кирпиче и рельефах.',
    },
    {
      icon: '🖼️',
      title: 'Passe-partout Effect',
      description: 'Технологичные отступы от краёв создают эффект студийного холста, визуально превращая принт в арт-объект.',
    },
  ],
};

export const guarantee = {
  title: 'Проект',
  titleAccent: 'Под Ключ',
  description: 'Мы берём на себя всё: от адаптации макета под вашу стену до финального штриха. Наш строительный отдел Solution Club выполнит всё без необходимости контроля каждого этапа.',
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
      title: 'Видео: Процесс печати в салоне-центре "Alexei"',
      type: 'video',
    },
    {
      title: 'Видео: Отзыв дизайнера "Arthaus Studio"',
      type: 'video',
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
  description: 'Заполните форму и получите расчёт стоимости вашего проекта в течение 15 минут, а также бесплатную 3D-визуализацию.',
  priceAnchor: 'от 45 000 ₽ за базовый пакет',
  submitText: 'Получить расчёт и визуализацию',
  fields: {
    name: 'Имя',
    namePlaceholder: 'Как вас зовут?',
    phone: 'Номер телефона',
    phonePlaceholder: '+7 (___) ___-__-__',
    file: 'Изображение или фото стены',
    fileHint: 'Перетащите файлы для загрузки',
  },
};
