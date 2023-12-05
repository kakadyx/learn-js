class MyPromise {
  status = 'pending';

  #error = null;

  #then = null;

  #catch = null;

  #childReject = null;

  #returnValue = {
    value: null,
  };

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

  catch(handler) {
    return new MyPromise((resolve, reject) => {
      try {
        this.#catch = (...args) => {
          resolve(handler(...args));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  resolve(value) {
    this.status = 'fulfilled';

    if (this.#then) this.#then(value);
  }

  reject(error) {
    this.status = 'rejected';
    this.#error = error;

    if (this.#catch) this.#catch(error);
    if (this.#childReject) this.#childReject(error);
  }
}

const testPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log('rejected');
    reject(new Error('error'));
  }, 3000);
});
console.log(testPromise);
const anotherPromise = testPromise.then((res) => console.log('thenable res', res));
console.log(anotherPromise);
setTimeout(() => console.log(testPromise, anotherPromise), 4000);

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
