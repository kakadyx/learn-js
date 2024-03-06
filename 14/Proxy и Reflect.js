{
  let user = {
    name: 'John',
  };

  // eslint-disable-next-line no-inner-declarations
  function wrap(target) {
    return new Proxy(target, {
      // eslint-disable-next-line no-shadow
      get(target, property, receiver) {
        const value = target[property];
        if (!value) throw new ReferenceError('Свойство не существует');

        return Reflect.get(target, property, receiver);
      },
    });
  }

  user = wrap(user);

  // console.log(user.name); // John
  // console.log(user.age); // Ошибка: такого свойства не существует
}
{
  let array = [1, 2, 3];

  array = new Proxy(array, {
    get(target, p, receiver) {
      if (p < 0) return target.at(p);
      return Reflect.get(target, p, receiver);
    },
  });

  // console.log(array[-1]); // 3
  // console.log(array[-2]); // 2
}
{
  function makeObservable(target) {
    target.handlers = [];
    target.observe = function (handler) {
      this.handlers.push(handler);
    };

    return new Proxy(target, {
      set(target, p, newValue, receiver) {
        const result = Reflect.set(target, p, newValue, receiver);
        if (result) {
          target.handlers.forEach((handler) => handler(p, newValue));
        }
        return result;
      },
    });
  }

  let user = { };
  user = makeObservable(user);

  user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
  });

  user.name = 'John'; // выводит: SET name=John
  user.surname = 'Pihta'; // выводит: SET name=Pihta
  user.kekname = 'Patrick'; // выводит: SET name=Patrick
}
