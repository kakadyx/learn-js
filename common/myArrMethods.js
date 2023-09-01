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

arr.myForEach((item) => console.log(item));

// myReduce
function myReduce(callback, acc) {
  let i = 0;
  let innerAcc = acc;
  for (const item of this) {
    i += 1;
    innerAcc = callback(innerAcc, item, i, this);
  }
  return innerAcc;
}

arr.__proto__.myReduce = myReduce;
console.log(arr.myReduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0));
