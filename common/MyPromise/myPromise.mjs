export default class MyPromise {
  status = 'pending';

  #then = null;

  #catch = null;

  #childReject = null
  constructor(executor) {
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  then(func) {
    return new MyPromise((resolve, reject) => {
      this.#childReject = reject;
      try {
        this.#then = (...args) => {
          resolve(func(...args));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  catch(func) {
    return new MyPromise((resolve, reject) => {
      try {
        this.#catch = (...args) => {
          resolve(func(...args));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  resolve(value) {
    this.status = 'fulfilled';

    queueMicrotask(() => this.#then?.(value));
  }

  reject(error) {
    this.status = 'rejected';

    queueMicrotask(() => this.#catch?.(error));
    queueMicrotask(() => this.#childReject?.(error));
  }
}

// const testPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('rejected');
//     reject(new Error('error'));
//   }, 3000);
// });
// console.log(testPromise);
// const anotherPromise = testPromise.then((res) => console.log('thenable res', res));
// console.log(anotherPromise);
// setTimeout(() => console.log(testPromise, anotherPromise), 4000);

// const testPromise1 = new MyPromise((resolve, reject) => {
//   setTimeout(reject, 400);
// });
//
// const testPromise2 = testPromise1.then(() => {});
// const testPromise3 = testPromise2.catch(() => 5).then((res) => {
//   console.log(res);
//   return res;
// }).then((res) => {
//   console.log(res ** res);
//   return res;
// });
// console.log(testPromise1);
// console.log(testPromise2);
// console.log(testPromise3);
//
// setTimeout(() => {
//   console.log(testPromise1);
//   console.log(testPromise2);
//   console.log(testPromise3);
// }, 500);
