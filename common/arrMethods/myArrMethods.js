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
    console.log(i);
    innerAcc = callback(innerAcc, this[i], i, this);
  }

  return innerAcc;
};

// console.log(arr.myReduce((acc, curr) => {
//   console.log(acc, curr);
//   return acc + curr;
// }, 0));
