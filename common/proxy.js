{
  let bro = {
    name: '',
    surname: '',
  };

  bro = new Proxy(bro, {
    get(target, p, receiver) {
      if (p === 'fullname') return `${target.name} ${target.surname}`;
      return Reflect.get(target, p, receiver);
    },
    set(target, p, newValue, receiver) {
      if (p === 'fullname') {
        const [name, surname] = newValue.split(' ');

        if (!name || !surname) throw new Error('Ощибка');

        target.name = name;
        target.surname = surname || '';

        return true;
      }
      return Reflect.set(target, p, newValue, receiver);
    },
  });
  bro.name = 'bro';
  bro.surname = 'wut';

  console.log(bro.fullname);

  bro.fullname = 'Kek What';

  console.log(bro.name);
  console.log(bro.surname);
  console.log(bro.fullname);

  bro.fullname = 'kek';
}
