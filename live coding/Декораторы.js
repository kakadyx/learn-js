// debounce
console.clear();
const testTimeout = 300;
// debounce

function consoleSum(a, b) {
  console.log(a + b);
}

// начало вашего кода
function debounce(func, timeout) {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, timeout, ...args);
  };
}
// конец

const debouncedFunc = debounce(consoleSum, testTimeout);

debouncedFunc(1, 1);
debouncedFunc(2, 2);
debouncedFunc(3, 3);
debouncedFunc(4, 4);
debouncedFunc(5, 5);

setTimeout(() => debouncedFunc(321, 123), testTimeout);
setTimeout(() => debouncedFunc(300, 300), testTimeout + 1);
// throttle

// curry

// log
