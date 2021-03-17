import { iDict } from '../components/types/types';

const dict: iDict = {
  months: {
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    ru: [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ],
    be: [
      'Студзеня',
      'Лютага',
      'Сакавіка',
      'Красавіка',
      'Мая',
      'Чэрвеня',
      'Ліпеня',
      'Жніўня',
      'Верасня',
      'Кастрычніка',
      'Лістапада',
      'Снежня',
    ],
  },
  weekDay: {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    be: ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'],
  },
  search: {
    en: 'Search',
    ru: 'Поиск',
    be: 'Пошук',
  },
  capital: {
    en: 'Capital:',
    ru: 'Столица:',
    be: 'Сталіца:',
  },
  places: {
    en: 'Places',
    ru: 'Места',
    be: 'Cлавутасці',
  },
  limit: {
    en: 'Limit reached :(',
    ru: 'Кол-во запросов истекло :(',
    be: 'Кол-сць запытаў скончылася :(',
  },
};

export default dict;
