// Установка и уменьшение значения счётчика
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
//
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
//
// P.S. Для того, чтобы сохранить текущее значение счётчика,
// можно воспользоваться как замыканием,
// так и свойством функции. Или сделать два варианта решения: и так, и так.
{
  function makeCounter() {
    let count = 0;
    function counter() {
      return count++;
    }
    counter.decrease = function () {
      count -= 1;
    };
    counter.set = function (num) {
      count = num;
    };

    return counter;
  }

  const counter = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1

  counter.set(10); // установить новое значение счётчика

  console.log(counter()); // 10

  counter.decrease(); // уменьшить значение счётчика на 1

  console.log(counter()); // 10 (вместо 11)
}
// Сумма с произвольным количеством скобок
{
  function sum(num) {
    let currentSum = num;

    function increase(number) {
      currentSum += number;
      return increase;
    }

    increase[Symbol.toPrimitive] = () => currentSum;

    return increase;
  }
  console.log(sum(1)(2) == 3); // 1 + 2
  console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
  console.log(sum(5)(-1)(2) == 6);
  console.log(sum(6)(-1)(-2)(-3) == 0);
  console.log(sum(0)(1)(2)(3)(4)(5) == 15);
  console.log(+sum(1)(2)); // 3
}
