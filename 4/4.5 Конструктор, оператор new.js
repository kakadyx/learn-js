{
    // Возможно ли создать функции A и B, чтобы new A() == new B()?
    const c = {}
    function A() {
        return c
    }

    function B() {
        return c
    }

    let a = new A();
    let b = new B();

    console.log(a == b); // true
// Если да – приведите пример вашего кода.
}
{
//     Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.
//     Например:

    function Calculator(){
        this.read = function (num1, num2){
            this.left = num1
            this.right = num2
        }
        this.sum = function () {
            return this.left + this.right
        }
        this.mul = function () {
            return this.left * this.right
        }

    }

    let calculator = new Calculator();
    calculator.read(3, 15);

    console.log( "Sum=" + calculator.sum() );
    console.log( "Mul=" + calculator.mul() );
}

{
    // Создайте функцию-конструктор Accumulator(startingValue).
    // Объект, который она создаёт, должен уметь следующее:
    // Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
    // Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.

    // Другими словами, свойство value представляет собой сумму всех введённых пользователем значений,
    // с учётом начального значения startingValue.
    function Accumulator (initialValue) {
       this.value = initialValue
       this.read = function(num){
           this.value += num
       }
    }

    let accumulator = new Accumulator(104); // начальное значение 1

    accumulator.read(5); // прибавляет введённое пользователем значение к текущему значению
    accumulator.read(10); // прибавляет введённое пользователем значение к текущему значению

   console.log(accumulator.value); // выведет сумму этих значений
}