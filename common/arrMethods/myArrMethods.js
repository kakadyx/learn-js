// myForEach
Array.prototype.myForEach = function (callback, thisArg) {
  const context = thisArg || this;
  let i = 0;
  for (const item of context) {
    i += 1;
    callback(item, i, context);
  }
};

// const arr = [14, 2, 3, 4, 5];

// arr.myForEach((item) => console.log(item));

// myReduce
Array.prototype.myReduce = function (callback, acc) {
  if (typeof callback !== 'function') throw new TypeError('callback is not a function');
  if (!this.length && !acc) throw new TypeError('no items with no initial value');
  let innerAcc = acc ?? this[0];
  let i = innerAcc === this[0] ? 1 : 0;

  for (;i < this.length; i++) {
    innerAcc = callback(innerAcc, this[i], i, this);
  }

  return innerAcc;
};

// myFrom
Array.myFrom = function (items, mapfn) {
  if (mapfn && typeof mapfn !== 'function') {
    throw new TypeError('second argument is not a funciton');
  }
  const result = [];

  const iterator = items?.[Symbol.iterator]?.();
  if (iterator) {
    let i = 0;
    let value = iterator.next();
    while (!value.done) {
      result.push(mapfn ? mapfn(value.value, i) : value.value);
      value = iterator.next();
      i += 1;
    }
  } else if (items.length) {
    result.length = items.length;
    for (let i = 0; i < result.length; i++) {
      const itemVal = items[i] ?? undefined;
      result[i] = mapfn ? mapfn(itemVal, i) : itemVal;
    }
  }

  return result;
};

console.log(Array.myFrom([1, 2, 3], (x) => x ** 2));
console.log(Array.myFrom('kekeke'));
const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.myFrom(set));
function f() {
  return Array.myFrom(arguments, (x) => x ** 3);
}

console.log(f(1, 2, 3));
// console.log(arr.myReduce((acc, curr) => {
//   console.log(acc, curr);
//   return acc + curr;
// }, 0));
