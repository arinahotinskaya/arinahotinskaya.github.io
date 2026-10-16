const media = (path, extra = {}) => ({
  src: `/${path}`,
  file: path,
  ...extra,
})

export const skills = [
  'Графический дизайн',
  'Веб-дизайн',
  'Мерч',
  '3D',
  'Контент',
  'Монтаж',
]

export const toc = [
  { href: '#merch', num: '01', label: 'Мерч' },
  { href: '#redesign', num: '02', label: 'Редизайн' },
  { href: '#badges-2023', num: '03', label: 'Бейджи ССМ 2023' },
  { href: '#badges-2026', num: '04', label: 'Бейджи Студфест 2026' },
  { href: '#graphic', num: '05', label: 'Графический дизайн' },
  { href: '#web', num: '06', label: 'Веб-дизайн' },
  { href: '#renders', num: '07', label: '3D-моделирование' },
  { href: '#instagram', num: '08', label: 'Instagram 7bit' },
]

export const contacts = [
  { href: 'https://t.me/hotinskayarina', label: 'Telegram' },
  { href: 'mailto:arinakhotinskaya@mail.com', label: 'Email' },
  { href: 'tel:+79851752297', label: 'Телефон' },
]

export const merchTags = [
  'Автомобильные рамки',
  'Толстовки',
  'Футболки',
  'Кепки',
  'Шопперы',
  'Ремувки',
  'Термокружки',
  'Стикерпаки',
  'Упаковочные пакеты',
]

export const carryShots = [
  media('images/merch/shopper.png', {
    alt: 'Шоппер 7bit',
    hint: 'Шоппер 7bit.',
  }),
  media('images/merch/remuvki.png', {
    alt: 'Ремувки «I 7BIT YOU»',
    hint: 'Ремувки «I 7BIT YOU».',
  }),
  media('images/merch/shoppers-street.png', {
    alt: 'Шоппер 7bit в уличной съёмке',
    hint: 'Шоппер 7bit в уличной съёмке.',
  }),
]

export const palette = [
  { name: 'Чёрный', hex: '#000000', tone: 'ink' },
  { name: 'Салатовый', hex: '#65A52A', tone: 'lime' },
  { name: 'Хвойный', hex: '#185038', tone: 'pine' },
  { name: 'Шалфей', hex: '#9DA982', tone: 'sage' },
]

export const stilyagiBadges = [
  media('images/badges/badge-ssm-khariton.png', { alt: 'Бейдж в стиле стиляг – Илья Харитон' }),
  media('images/badges/badge-ssm-kholodov.png', { alt: 'Бейдж в стиле стиляг – Святослав Холодов' }),
  media('images/badges/badge-ssm-smirnov.png', { alt: 'Бейдж в стиле стиляг – Даниил Смирнов' }),
]

export const festStats = [
  {
    value: 'Разработка',
    label: 'концепция, шаблон в Figma и Photoshop, 6 цветовых вариаций макета',
  },
  {
    value: 'Персонализация',
    label: 'ретушь и сборка 79 бейджей',
  },
  {
    value: 'Подготовка к печати',
    label: 'общая печатная форма и подбор цветов лент',
  },
]

export const festBadges = [
  media('images/badges/badge-sf-khotinskaya.png', { alt: 'Бейдж Студфест 2026 – Хотинская' }),
  media('images/badges/badge-sf-solovyov.png', { alt: 'Бейдж Студфест 2026 – Соловьёв' }),
  media('images/badges/badge-sf-klimova.png', { alt: 'Бейдж Студфест 2026 – Климова' }),
  media('images/badges/badge-sf-simikyan.png', { alt: 'Бейдж Студфест 2026 – Симикян' }),
  media('images/badges/badge-sf-mun.png', { alt: 'Бейдж Студфест 2026 – Мун' }),
  media('images/badges/badge-sf-perimov.png', { alt: 'Бейдж Студфест 2026 – Перимов Артур' }),
]

export const roomSigns = [
  media('images/sign-122.png', { alt: 'Табличка кабинета 122', hint: 'Макет таблички кабинета 122.' }),
  media('images/sign-206.png', { alt: 'Табличка кабинета 206', hint: 'Макет таблички кабинета 206.' }),
  media('images/sign-214.png', { alt: 'Табличка кабинета 214', hint: 'Макет таблички кабинета 214.' }),
  media('images/sign-215.png', { alt: 'Табличка кабинета 215', hint: 'Макет таблички кабинета 215.' }),
]

export const screens = [
  {
    caption: 'Паспорт станции',
    laptop: media('images/web/station-laptop.png', {
      alt: 'Карточка станции, ноутбук',
      hint: 'Карточка станции – скриншот на ноутбуке.',
    }),
    phone: media('images/web/station-phone.png', {
      alt: 'Карточка станции, телефон',
      hint: 'Карточка станции – скриншот на телефоне.',
    }),
  },
  {
    caption: 'Карта станций',
    laptop: media('images/web/map-laptop.png', {
      alt: 'Карта станций, ноутбук',
      hint: 'Карта станций – скриншот на ноутбуке.',
    }),
    phone: media('images/web/map-phone.png', {
      alt: 'Карта станций, телефон',
      hint: 'Карта станций – скриншот на телефоне.',
    }),
  },
  {
    caption: 'Доступ к данным',
    laptop: media('images/web/table-laptop.png', {
      alt: 'Таблица данных, ноутбук',
      hint: 'Таблица данных – скриншот на ноутбуке.',
    }),
    phone: media('images/web/table-phone.png', {
      alt: 'Таблица данных, телефон',
      hint: 'Таблица данных – скриншот на телефоне.',
    }),
  },
  {
    caption: 'Форма входа',
    laptop: media('images/web/login-laptop.png', {
      alt: 'Страница входа, ноутбук',
      hint: 'Страница входа – скриншот на ноутбуке.',
    }),
    phone: media('images/web/login-phone.png', {
      alt: 'Страница входа, телефон',
      hint: 'Страница входа – скриншот на телефоне.',
    }),
  },
  {
    caption: 'Страница 404',
    laptop: media('images/web/404-laptop.png', {
      alt: 'Страница 404, ноутбук',
      hint: 'Страница 404 – скриншот на ноутбуке.',
    }),
    phone: media('images/web/404-phone.png', {
      alt: 'Страница 404, телефон',
      hint: 'Страница 404 – скриншот на телефоне.',
    }),
  },
]

export const furniture = [
  media('images/3d/furniture-01.png', {
    alt: '3D-модель мебели, предмет 1',
    title: 'Мебель 01',
    hint: 'Смоделированная мебель',
  }),
  media('images/3d/furniture-02.png', {
    alt: '3D-модель мебели, предмет 2',
    title: 'Мебель 02',
    hint: 'Смоделированная мебель',
  }),
  media('images/3d/furniture-03.png', {
    alt: '3D-модель мебели, предмет 3',
    title: 'Мебель 03',
    hint: 'Смоделированная мебель',
  }),
  media('images/3d/furniture-04.png', {
    alt: '3D-модель стеклянной рамки для постеров со светодиодной лентой',
    title: 'Мебель 04',
    hint: 'Рамка для постеров со светодиодной лентой',
  }),
]

export const carShots = [
  media('images/3d/car-01.png', {
    alt: '3D-модель автомобиля, ракурс 1',
    title: 'Автомобиль',
    hint: 'Ракурс 1',
  }),
  media('images/3d/car-02.png', {
    alt: '3D-модель автомобиля, ракурс 2',
    title: 'Автомобиль',
    hint: 'Ракурс 2',
  }),
]

export const igStats = [
  { value: '17 → 43', label: 'публикации в ленте' },
  { value: '26', label: 'новых постов и рилсов' },
  { value: '12', label: 'хайлайтсов' },
  { value: '132', label: 'новые истории с событиями 2018-2026' },
]

export const igPosts = [
  media('images/ig/feed.png', {
    alt: 'Скриншот ленты Instagram 7bit',
    title: 'Лента',
    hint: 'Скриншот ленты',
  }),
  media('images/ig/stats-01.png', {
    alt: 'Статистика аккаунта 7bit, скриншот 1',
    title: 'Статистика',
    hint: 'Скриншот статистики',
  }),
  media('images/ig/stats-02.png', {
    alt: 'Статистика аккаунта 7bit, скриншот 2',
    title: 'Статистика',
    hint: 'Скриншот статистики',
  }),
]

export const igReels = [
  media('images/ig/reel-01.mp4', { alt: 'Рилс 1', title: 'Рилс 1', hint: 'Видео рилса' }),
  media('images/ig/reel-02.mp4', { alt: 'Рилс 2', title: 'Рилс 2', hint: 'Видео рилса' }),
  media('images/ig/reel-03.mp4', { alt: 'Рилс 3', title: 'Рилс 3', hint: 'Видео рилса' }),
]

export const igReelStats = [
  media('images/ig/reel-stats-01.png', {
    alt: 'Статистика первого рилса',
    title: 'Рилс 1',
    hint: 'Статистика рилса сверху',
  }),
  media('images/ig/reel-stats-02.png', {
    alt: 'Статистика второго рилса',
    title: 'Рилс 2',
    hint: 'Статистика рилса сверху',
  }),
  media('images/ig/reel-stats-03.png', {
    alt: 'Статистика третьего рилса',
    title: 'Рилс 3',
    hint: 'Статистика рилса сверху',
  }),
]
