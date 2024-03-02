const range = {
  from: 1,
  to: 3,

  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        const done = this.current >= this.last;
        return {
          value: done ? undefined : this.current++,
          done,
        };
      },
    };
  },
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        const done = this.current >= this.last;
        return {
          value: done ? undefined : this.current++,
          done,
        };
      },
    };
  },
};
// (async () => {
//   for await (const i of range) {
//     console.log(i);
//   }
// })();
// (async () => {
//   for (const i of range) {
//     console.log(i);
//   }
// })();

// const iterator = range[Symbol.iterator]();

// for (const i of iterator) {
//   console.log(i);
// }
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const item of iterator) {
//   console.log(item);
// }
const iter = range[Symbol.iterator]();
const iter2 = 'lol'[Symbol.iterator]()[Symbol.iterator];
console.log(iter2);
for (const item of iter2) {
  console.log(item);
}

// function createAsyncIter(from, to) {
//   return {
//     async* [Symbol.asyncIterator]() {
//       for (let i = from; i <= to; i++) {
//         await new Promise((res) => setTimeout(res, 1000));
//         yield i;
//       }
//     },
//   };
// }
//
// (async () => {
//   for await (const i of createAsyncIter(1, 10)) {
//     console.log(i);
//   }
// })();
