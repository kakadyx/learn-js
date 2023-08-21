{
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
//     Примеры:
    function camelize(str){
        return str.split('-').map((substr, i) => !i ? substr :  substr.slice(0, 1).toUpperCase() + substr.slice(1)).join('')
    }
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
}

{
    // Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
    //
    // Функция должна возвращать новый массив и не изменять исходный.
    //
    // Например:
   function filterRange(arr, a, b){
      return  arr.filter(el => (el >= a && el <= b))
   }
    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); // 3,1 (совпадающие значения)

    console.log( arr ); // 5,3,8,1 (без изменений)
}

{
    // Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
    //
    // Функция должна изменять принимаемый массив и ничего не возвращать.
    //
    // Например:

    function filterRangeInPlace(arr, a, b){
        const indexesToDelete = []
        arr.forEach((item, i) => {
            if (item >= a && item <= b) {
                return;
            } else {
                indexesToDelete.push(i)
            }
        })
        indexesToDelete.reverse().forEach(index => arr.splice(index, 1))
    }
    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

    console.log( arr ); // [3, 1]
}

{
    let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

    console.log( arr.sort((a, b) => b - a) ); // 8, 5, 2, 1, -10
}

{
    // У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
    //
    // Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    function copySorted(arr){
        return arr.slice().sort()
    }
    let sorted = copySorted(arr);

    console.log( sorted ); // CSS, HTML, JavaScript
    console.log( arr ); // HTML, JavaScript, CSS (без изменений)
}
{
    // Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
    //
    // Задание состоит из двух частей.
    //
    // Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
    //
    // Пример использования:
    // let calc = new Calculator;
    //
    // alert( calc.calculate("3 + 7") ); // 10
    // Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
    // Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
    //
    // Например, давайте добавим умножение *, деление / и возведение в степень **:
    //
    // let powerCalc = new Calculator;
    // powerCalc.addMethod("*", (a, b) => a * b);
    // powerCalc.addMethod("/", (a, b) => a / b);
    // powerCalc.addMethod("**", (a, b) => a ** b);
    //
    // let result = powerCalc.calculate("2 ** 3");
    // alert( result ); // 8
    // Для этой задачи не нужны скобки или сложные выражения.
    // Числа и оператор разделены ровно одним пробелом.
    // Не лишним будет добавить обработку ошибок.

    function Calculator() {
        const operatorsCallbacksList = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b
        }
        this.calculate = function (str) {
            const splittedStr = str.split(' ')
            const leftOp = splittedStr[0]
            const rightOp = splittedStr.at(-1)
            const operator = splittedStr[1]
            if(operatorsCallbacksList[operator])
                return operatorsCallbacksList[operator](+leftOp, +rightOp)
        }

        this.addMethod = function(operator, callback) {
            operatorsCallbacksList[operator] = callback
        }
    }

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    console.log( result ); // 8
}

{
    // У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
    //
    // Например:
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = users.map(item => item.name).join(', ')

    console.log( names ); // Вася, Петя, Маша
}

{
    // У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
    //
    // Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
    //
    // Например:

    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map(item => ({fullName: item.name + ' ' + item.surname, id: item.id}))

        /*
        usersMapped = [
          { fullName: "Вася Пупкин", id: 1 },
          { fullName: "Петя Иванов", id: 2 },
          { fullName: "Маша Петрова", id: 3 }
        ]
        */

    console.log( usersMapped[0].id ) // 1
    console.log( usersMapped[0].fullName ) // Вася Пупкин
}

{
    // Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
    //
    // Например:
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];
    function sortByAge(arr){
        arr.sort((a, b) => a.age - b.age )
    }
    sortByAge(arr);

// теперь: [vasya, masha, petya]
    console.log(arr[0].name); // Вася
    console.log(arr[1].name); // Маша
    console.log(arr[2].name); // Петя
}

{
//     Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//
//     Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
    let arr = [1, 2, 3];

    function shuffle(arr){
        arr.sort(() => Math.random() - 0.5);
    }
    shuffle(arr);
// arr = [3, 2, 1]

    shuffle(arr);
// arr = [2, 1, 3]

    shuffle(arr);
// arr = [3, 1, 2]
// ...
}

{
    // Пусть arr – массив строк.
    //
    // Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
    function unique(arr) {
       return  arr.reduce((acc, curr) => {
            if(!acc.includes(curr))
                return [...acc, curr]
            return acc
        }, [])
    }

    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"
    ];

    console.log( unique(strings) ); // кришна, харе, :-O
}
{
    // Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
    //
    // Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
    //
    function groupById(arr){
        return Object.fromEntries(arr.map(item => ([item.id, item])))
    }
    // Например:
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);
    console.log(usersById)
    /*
    // после вызова у нас должно получиться:

    usersById = {
      john: {id: 'john', name: "John Smith", age: 20},
      ann: {id: 'ann', name: "Ann Smith", age: 24},
      pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */
}