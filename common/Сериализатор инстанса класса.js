// eslint-disable-next-line max-classes-per-file
function getStaticData(instance) {
  if (instance === Object.prototype) return {};
  const parentClass = instance.__proto__.constructor;
  const rawStaticDescriptors = Object.getOwnPropertyDescriptors(parentClass);

  const staticData = Object.entries(rawStaticDescriptors)
    .filter(([key]) => !['name', 'prototype', 'length'].includes(key))
    .map(([key, { value, get }]) => [key, { value, get }])
    .reduce((acc, [key, descriptor]) => {
      const { value, get } = descriptor;
      if (value) {
        if (typeof value === 'function' && value.name.startsWith('get') && value.length === 0) {
          acc[key] = value();
        } else if (typeof value !== 'function') {
          acc[key] = value;
        }
        return acc;
      }
      acc[key] = get();
      return acc;
    }, {});

  const parentStaticData = getStaticData(instance.__proto__);
  return { ...parentStaticData, ...staticData };
}

function getMethodsData(instance, originInstance = instance) {
  if (instance === Object.prototype) return {};
  const instanceProto = instance.__proto__;
  const methodsData = Object.entries(Object.getOwnPropertyDescriptors(instanceProto))
    .filter((item) => item.key !== 'constructor')
    .map(([key, { value, get }]) => [key, { value, get }])
    .reduce((acc, [key, { value, get }]) => {
      if (value && key.startsWith('get') && !value.length) {
        acc[key] = value.call(originInstance);
      } else if (!value && get) {
        acc[key] = get.call(originInstance);
      }
      return acc;
    }, {});

  const parentMethodsData = getMethodsData(instance.__proto__, originInstance);
  return { ...parentMethodsData, ...methodsData };
}

function serializeClassInstance(instance) {
  const instanceDescriptors = Object.getOwnPropertyDescriptors(instance);
  const fields = Object.fromEntries(
    Object.entries(instanceDescriptors)
      .map(([key, descriptor]) => [key, descriptor.value]),
  );
  const staticData = getStaticData(instance);
  const methodsData = getMethodsData(instance);
  return JSON.stringify({ ...methodsData, ...staticData, ...fields });
}
class Buzz {
  static bizz = 'buzz';

  auf = 25;

  getAux() {
    return this.auf;
  }
}
class Bar extends Buzz {
  static lolWhat = 5;

  static barZ() {
    return 'bar';
  }

  static getBar() { return 15; }

  static get lol() {
    return 'lol';
  }

  getSomething() {
    return 'something';
  }

  something = true;
}
class Foo extends Bar {
  field = 5;

  get bar() {
    return this.field;
  }

  getBiba() {
    return Foo.biba;
  }

  static getStaticBiba() {
    return 'bibastatic';
  }

  static biba = 'biba';
}

const a = new Foo();

const jsonified = serializeClassInstance(a);
console.log(jsonified);
console.log(JSON.parse(jsonified));
