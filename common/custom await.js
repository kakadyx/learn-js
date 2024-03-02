function fetchSmth(test, timeout) {
  return new Promise((resolve) => setTimeout(() => {
    console.log('resolved', test);
    resolve(test);
  }, timeout));
}

function* generator() {
  for (let i = 0; i < 5; i++) {
    const result = yield fetchSmth(i, 1000 * i);
    console.log(result);
  }
}

function customAwait(generator) {
  const iter = generator();
  const handler = (result) => {
    if (result.done) return result.value;

    return result.value
      .then((res) => handler({ done: true, value: res }))
      .then((res) => handler(iter.next(res)));
  };

  return handler(iter.next());
}

customAwait(generator);
