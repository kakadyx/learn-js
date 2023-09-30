//raw
console.clear()
const testTimeout = 300

function consoleSum (a, b) {
    console.log(a + b)
}

// начало вашего кода
function throttle() {
}
// конец

const throttledFunc = throttle(consoleSum, testTimeout)

throttledFunc(1, 1)
throttledFunc(2, 2)
throttledFunc(3, 3)
throttledFunc(4, 4)
throttledFunc(5, 5)

setTimeout(() => {
    throttledFunc(321, 123)
}, testTimeout - 1)
setTimeout(() => throttledFunc(300, 300), testTimeout)

// final

function throttle(func, timeout) {
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