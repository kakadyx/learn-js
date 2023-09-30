// Декоратор-шпион
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  function wrap(...args) {
    wrap.calls.push(args);
    return func(...args);
  }
  wrap.calls = [];
  return wrap;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (const args of work.calls) {
  console.log(`call:${args.join()}`); // "call:1,2", "call:4,5"
}
// Задерживающий декоратор
{
  function f(x) {
    console.log(x);
  }

  function delay(func, timeout) {
    return (...args) => setTimeout(func, timeout, ...args);
  }

  const f1000 = delay(f, 1000);
  const f1500 = delay(f, 1500);

  f1000('test'); // показывает "test" после 1000 мс
  f1500('test'); // показывает "test" после 1500 мс
}
// Декоратор debounce
{
  const f = debounce(console.log, 1000);

  function debounce(func, timeout) {
    let canBeCalled = true;
    return (...args) => {
      if (canBeCalled) {
        f.apply(this, args);
        canBeCalled = false;
        setTimeout(() => {
          canBeCalled = true;
        }, timeout);
      }
    };
  }

  f(1); // выполняется немедленно
  f(2); // проигнорирован

  setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
  setTimeout(() => f(4), 1100); // выполняется
  setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
}
// Декоратор throttle
{
  function throttle(func, timeout) {
    let lastFuncArgs = null;
    let lastFuncThis = null;
    let isBlocked = false;
    return function (...args) {
      lastFuncArgs = args;
      lastFuncThis = this;
      if (isBlocked) return;
      isBlocked = true;
      func.call(this, args);
      setTimeout(() => {
        isBlocked = false;
        if (lastFuncArgs) func.call(lastFuncThis, lastFuncArgs);
      }, timeout);
    };
  }

  function throttleBest(func, timeout) {
    let innerArgs = null;
    let timeoutId = null;

    return function (...args) {
      if (timeoutId) {
        innerArgs = args;
        return;
      }

      func(...args);
      timeoutId = setTimeout(() => {
        if (innerArgs) {
          func(...innerArgs);
          innerArgs = null;
          timeoutId = null;
        }
      }, timeout);
    };
  }

  function f(a) {
    console.log(a);
  }

  // f1000 передаёт вызовы f максимум раз в 1000 мс
  const f1000 = throttle(f, 1000);

  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3); // (ограничение, 1000 мс ещё нет)
}
