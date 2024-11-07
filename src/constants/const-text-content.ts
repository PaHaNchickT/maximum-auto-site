export const TEXT_CONTENT = {
  header: {
    headerTitle: 'Тестик',
  },
  footer: {
    madeby: 'Сделал Павел Терно',
    works: 'Больше работ тут:',
  },
  welcome: {
    title: '«Мстители» атакуют: тест на знание Кинематографической вселенной Marvel',
    text: 'В детстве мечтали оказаться в Мстителях? Ответьте на вопросы и узнайте, подходите ли Вы для величайшей команды Земли!',
    button: 'Начать',
  },
  questions: {
    title: 'Тестирование',
    answerBtn: 'Ответить',
    endBtn: 'Закончить',
    textLowLabel: 'Введите свой ответ:',
    textHighLabel: 'Напишите развернутый ответ:',
    errorText: 'Пожалуйста, ответьте на вопрос',
    isCorrect: 'Необходима проверка вручную',
  },
  ending: {
    success: {
      title: 'Тестирование завершено!',
      text: 'Ваши ответы успешно записаны. В течение нескольких дней результат появится в вашем личном кабинете.',
      button: 'Главная страница',
    },
    failure: {
      title: 'К сожалению, время истекло!',
      text: 'Не расстраивайтесь! Вы можете попробовать пройти тест заново.',
      button: 'Попробовать еще',
    },
  } as { [key: string]: { [key: string]: string } },
  error: {
    errorTitle: 'Упс!',
    errorMsg: 'Что-то пошло не так!',
    notFoundTitle: '404',
    notFoundMsg: 'Страница не найдена!',
    homeBtn: 'На главную страницу',
    reloadBtn: 'Перезагрузить страницу',
  },
};

export const FILTER_DATA = [
  {
    label: 'Бренд',
    key: 'brand',
    array: [
      ['Chery', 'Haval', 'Geely'],
      ['Exeed', 'Omoda', 'Changan', 'Jaecoo'],
    ],
    className: '',
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
