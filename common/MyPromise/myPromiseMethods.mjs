// реализовать Promise.myAny

// eslint-disable-next-line no-proto
Promise.__proto__.myAny = function (promises) {
  const errors = [];
  return new Promise((resolve, reject) => {
    let i = 0;
    for (const promise of promises) {
      promise
        .then(resolve)
        .catch((error) => {
          errors[i++] = error;
          if (errors.length === promises.length) reject(new AggregateError(errors));
          return null;
        });
    }
  });
};

const delay = function (timing, success = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve(timing);
      else reject(new Error(timing));
      console.log(`${timing} ${success ? 'resolved' : 'rejected'}`);
    }, timing);
  });
};

console.log(
    Promise.myAny(
    [
      delay(500),
      delay(1000),
      delay(1),
    ],
  )
    .then((res) => console.log(res))
    .catch((error) => console.log(error)),
);
