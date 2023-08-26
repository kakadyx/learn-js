// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

console.log(new Date(2012, 1, 20, 3, 12));

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
{
  const date = new Date(2012, 0, 3); // 3 января 2012 года

  function getWeekDay(date) {
    let res = '';
    switch (date.getDay()) {
      case 0:
        res = 'ВС';
        break;
      case 1:
        res = 'ПН';
        break;
      case 2:
        res = 'ВТ';
        break;
      case 3:
        res = 'СР';
        break;
      case 4:
        res = 'ЧТ';
        break;
      case 5:
        res = 'ПТ';
        break;
      case 6:
        res = 'СБ';
        break;
    }
    // let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    //
    //   return days[date.getDay()];
    //
    return res;
  }

  console.log(getWeekDay(date)); // нужно вывести "ВТ"
}

{
  // Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
  // К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
  // Функция должна надёжно работать при значении days=365 и больших значениях:
  const date = new Date(2015, 0, 2);
  function getDateAgo(dates, days) {
    return new Date(dates - 1000 * 60 * 60 * 24 * days).getDate();
  }
  console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
  console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
  console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
}
{
  // Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
  // Параметры
  // year – год из четырёх цифр, например, 2012.
  // month – месяц от 0 до 11.
  // К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
  function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  console.log(getLastDayOfMonth(2012, 1));
}

{
  // Сколько сегодня прошло секунд?
  function getSecondsToday() {
    const currentDate = new Date();
    return (currentDate - new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / 1000;
  }
  console.log(getSecondsToday());
}

{
  // Сколько секунд осталось до завтра?
  function getSecondsToTomorrow() {
    const currentDate = new Date();
    return (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1) - currentDate) / 1000;
  }
  console.log(getSecondsToTomorrow());
}
{
  // Форматирование относительной даты
  function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    if (diff < 1000) {
      console.log('прямо сейчас');
    } else if (diff < 60 * 1000) {
      console.log(`${diff / 1000} секунд назад`);
    } else if (diff < 60 * 60 * 1000) {
      console.log(`${(diff / 1000 / 60).toFixed(0)} минут назад`);
    } else {
      console.log(`${date.getFullYear().toFixed(0).slice(2, 4)}.${`${date.getMonth()}`.length === 2 ? date.getMonth() : `0${date.getMonth()}`}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
    }
  }
  formatDate(new Date()); // прямо сейчас
  formatDate(new Date(new Date() - 30 * 1000));
  formatDate(new Date(new Date() - 5 * 60 * 1000));
  formatDate(new Date(new Date() - 86400 * 1000));
}
