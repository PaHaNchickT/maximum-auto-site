export const TEXT_CONTENT = {
  header: {
    headerTitle: 'Официальный дилер Максимум',
  },
  footer: {
    madeby: 'Работу выполнил Павел Терно',
  },
  mainPage: {
    resetBtn: 'Сбросить фильтр',
    moreBtn: 'Подробнее',
    notFoundTitle: 'По вашему запросу ничего не найдено!',
    notFoundSubTitle: 'Попробуйте изменить параметры фильтров',
  },
  itemPage: {
    legal: 'Гарантия юр. чистоты',
    characteristics: 'Характеристики',
    bannerTitle: 'Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»',
    bannerBtn: 'Оформить',
  },
  error: {
    errorTitle: 'Упс!',
    errorMsg: 'Что-то пошло не так!',
    notFoundTitle: '404',
    notFoundMsg: 'Страница не найдена!',
    homeBtn: 'На главную страницу',
    backBtn: 'Вернуться назад',
  },
};

export const FILTER_DATA = [
  {
    label: 'Бренд',
    key: 'brand',
    array: [['Chery', 'Haval', 'Geely', 'Exeed', 'Omoda', 'Changan', 'Jaecoo']],
    className: 'block md:hidden',
  },
  {
    label: 'Бренд',
    key: 'brand',
    array: [
      ['Chery', 'Haval', 'Geely'],
      ['Exeed', 'Omoda', 'Changan', 'Jaecoo'],
    ],
    className: 'hidden md:block',
  },
  {
    label: 'Объем двигателя',
    key: 'volume',
    array: [['1.4 л.', '1.5 л.', '1.6 л.']],
    className: 'hidden md:block',
  },
  {
    label: 'Комплектация',
    key: 'equipment',
    array: [
      ['Active', 'Tech Plus', 'Prime', 'Luxury'],
      ['Lifestyle', 'LX', 'Comfort', 'Flagship'],
      ['Platinum', 'Premium', 'President'],
      ['Prestige', 'Elite', 'DLX'],
      ['Supreme', 'Ultimate'],
    ],
    className: 'hidden md:block',
  },
];
