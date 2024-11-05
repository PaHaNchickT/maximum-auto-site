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
    array: [
      ['Chery', 'Haval', 'Geely'],
      ['Exeed', 'Omoda', 'Changan', 'Jaecoo'],
    ],
  },
  {
    label: 'Объем двигателя',
    array: [['1,5 л.', '1,6 л.', '2,0 л.']],
  },
  {
    label: 'Комплектация',
    array: [
      ['Action', 'Techno', 'Travel', 'Luxury'],
      ['Cosmo', 'Trek', 'Comfort', 'Family'],
      ['Prestige', 'Elite', 'Dreamline'],
      ['Speedline', 'Ultimate'],
    ],
  },
];
