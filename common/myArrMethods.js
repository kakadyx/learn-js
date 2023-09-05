// myForEach
function myForEach(callback, thisArg) {
  const context = thisArg || this;
  let i = 0;
  for (const item of context) {
    i += 1;
    callback(item, i, context);
  }
}

const arr = [14, 2, 3, 4, 5];

arr.__proto__.myForEach = myForEach;

Array.prototype.re;
arr.myForEach((item) => console.log(item));

// myReduce
function myReduce(callback, acc) {
  let i = 0;
  let innerAcc = acc ?? this[0];
  for (const item of this) {
    i += 1;
    // eslint-disable-next-line no-continue
    if (innerAcc === this[0]) continue;
    innerAcc = callback(innerAcc, item, i, this);
  }
  return innerAcc;
}

arr.__proto__.myReduce = myReduce;
console.log(arr.myReduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0));
