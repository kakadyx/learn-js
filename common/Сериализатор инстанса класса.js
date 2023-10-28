// eslint-disable-next-line max-classes-per-file
class Serializer {
  static serialize(instance) {
    // field
    const classPrototype = instance.__proto__;
    // base methods
    const classMethods = Object.getOwnPropertyDescriptors(classPrototype);
    // static methods
    const classConstructor = Object.getOwnPropertyDescriptors(classPrototype.constructor);
  }

  static deserialize(string) {

  }
}

class Foo {
  bar = 'foo';

  foo() {
    return this.bar;
  }

  static foobar() {
    return `${this.bar}foo`;
  }
}

const foobar = new Foo();

Serializer.serialize(foobar);
