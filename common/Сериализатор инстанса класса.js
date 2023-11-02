function serializeClassInstance(instance) {
  const classPrototype = instance.__proto__;

  const classConstructorDescriptors = Object.getOwnPropertyDescriptors(classPrototype.constructor);
  const prototypeDescriptors = Object.getOwnPropertyDescriptors(classPrototype);
  const instanceDescriptors = Object.getOwnPropertyDescriptors(instance);

  const filteredMethodsEntries = Object.entries(prototypeDescriptors)
    .filter((key) => key !== 'contructor');
  const filteredStaticFieldsEntries = Object.entries(classConstructorDescriptors)
    .filter(([key]) => !['name', 'prototype', 'length'].includes(key));
  function reduceCallbackGetMethodsValues(acc, [key, descriptor]) {
    if (descriptor.value) {
      if (descriptor.value.length || !key.startsWith('get')) {
        return acc;
      }

      acc[key] = descriptor.value.call(instance);

      return acc;
    }

    acc[key] = descriptor.get.call(instance);
    return acc;
  }
  const fields = Object.fromEntries(
    Object.entries(instanceDescriptors)
      .map(([key, descriptor]) => [key, descriptor.value]),
  );
  const staticFields = filteredStaticFieldsEntries.reduce(reduceCallbackGetMethodsValues, {});
  const methodsValues = filteredMethodsEntries.reduce(reduceCallbackGetMethodsValues, {});
  return JSON.stringify({ ...methodsValues, ...staticFields, ...fields });
}

class Foo {
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

console.log(serializeClassInstance(a));
console.log(JSON.parse(serializeClassInstance(a)));
