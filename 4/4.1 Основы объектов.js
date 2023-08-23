// Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.
{
    const user = {} // = Object()
    user.name = 'John'
    user.surname = 'Smith'
    user.name = 'Pete'
    delete user.name
}
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//     Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
{
    function isEmpty (obj) {
        return !Object.keys(obj).length
    }
}
{
    const user = {
        name: "John"
    };

// это будет работать? - да
    user.name = "Pete";
}
// У нас есть объект, в котором хранятся зарплаты нашей команды:
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
{
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    const sum = Object.values(salaries).reduce((prev, curr) => prev + curr, 0)
}
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
{
    function multiplyNumeric(obj){
        Object.entries(obj).forEach(([key,value]) => {
            if (typeof value === 'number') obj[key] *= 2
        } )
    }
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    multiplyNumeric(menu);
    console.log(menu)
}