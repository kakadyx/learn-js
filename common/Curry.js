function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(undefined, args);
    }
    return function (...args2) {
      return curried.apply(undefined, args.concat(args2));
    };
  };
}

const curry3 = (f) => (...args) => (args.length >= f.length
  ? f(...args)
  : curry(f.bind(undefined, ...args)));

function anotherCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...args2) {
      return curried(...args.concat(args2));
    };
  };
}

const sum = (a, b, c, d) => a + c + b + d;

const curriedSum = anotherCurry(sum);

// console.log(curriedSum(1, 3, 54)(1));
console.log(curriedSum(1)(2)(3)(4));
console.log(curriedSum(10)(21)(3)(4));
console.log(curriedSum(1)(2)(3)(4));

// console.log(curriedSum(1, 3, 54)(1));

function currySum(num) {
  let result = num;
  function sum(num2) {
    result += num2;
    return sum;
  }

  sum[Symbol.toPrimitive] = () => result;
  return sum;
}

// console.log(+currySum(1)(2)(3));
