//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

console.log(new Date(2012, 1, 20, 3, 12))

//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date){
    let res = ''
    switch (date.getDay()){
        case 0:
            res = 'ВС'
            break;
        case 1:
            res = 'ПН'
            break;
        case 2:
            res = 'ВТ'
            break;
        case 3:
            res = 'СР'
            break;
        case 4:
            res = 'ЧТ'
            break;
        case 5:
            res = 'ПТ'
            break;
        case 6:
            res = 'СБ'
            break;
    }
    // let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    //
    //   return days[date.getDay()];
    //
    return res

}
console.log( getWeekDay(date) );        // нужно вывести "ВТ"