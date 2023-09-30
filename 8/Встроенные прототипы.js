// Добавить функциям метод "f.defer(ms)"
// важность: 5
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
//
//     После этого должен работать такой код:

Function.prototype.defer = function (timeout) {
  setTimeout(this, timeout);
};

function f() {
  console.log('Hello!');
}

f.defer(1000); // выведет "Hello!" через 1 секунду

{
  // Добавьте функциям декорирующий метод "defer()"
  // важность: 4
  // Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
  //
  // Например, должно работать так:

  Function.prototype.defer = function (timeout) {
    const fn = this;
    return function (...args) {
      setTimeout(fn, timeout, ...args);
    };
  };
  function f(a, b) {
    console.log(a + b);
  }

  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
}
