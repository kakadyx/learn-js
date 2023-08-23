// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
//     свойство years присвоит в переменную age.
//     свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };
const {name, years: age, isAdmin = false} = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//     P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    return Object.entries(salaries).sort(([, valueA], [, valueB]) => valueA - valueB ).at(-1)[1]
}
console.log(topSalary(salaries))