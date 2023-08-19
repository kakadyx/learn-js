'use strict';
// Как потерять this?
{
    const obj = {
        field: 'exist',
        func(){
            console.log(this.field)
        }
    }
    const noThisFunc = obj.func

    obj.func()
    //noThisFunc() // this потерян т.к. функция не имеет контекста исполнения
}

// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

// console.log( user.ref.name ); // error

// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
{
    let calculator = {
        read(num1, num2){
            this.left = num1
            this.right = num2
        },
        sum(){
            return this.left + this.right
        },
        mul(){
            return this.left * this.right
        }
    };

    calculator.read(5, 12);
    console.log( calculator.sum() );
    console.log( calculator.mul() );
}
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this
    }
}
ladder.up().up().down().showStep().down().showStep() // 1 0
// цель: ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0