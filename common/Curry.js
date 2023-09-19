function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

function anotherCurry(func) {
  let innerArgs = [];
  return function curried(...args) {
    innerArgs = innerArgs.concat(args);
    if (innerArgs.length >= func.length) {
      return func(...innerArgs);
    }
    return function (...args2) {
      innerArgs = innerArgs.concat(args2);
      return curried(...innerArgs);
    };
  };
}

const sum = (a, b, c, d) => a + c + b + d;

const curriedSum = anotherCurry(sum);

console.log(curriedSum(1, 3, 54)(1));

function currySum(num) {
  let result = num;
  function sum(num2) {
    result += num2;
    return sum;
  }

  sum[Symbol.toPrimitive] = () => result;
  return sum;
}

console.log(+currySum(1)(2)(3));
