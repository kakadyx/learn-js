// Написать функцию конструктор для заказа в магазине.

// Новый инстанс - новый заказ у него будут методы:
// addItem(item, count) - добавить итем в чек (+ имя +цена)
// removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
// getCheck() - получить информацию сколько каких итемов в чеке,
// общую цену,
// опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
// lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
// unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

// Формат item - объект с:
// Названием итема;
// Ценой за штуку. Два итема с одинаковым именем считаем одной позицией в чеке.

// Использовать отладку (debugger) при решении в хроме.
// Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов

// доп задание - добавить работу с локал стором (общий для всех объектов)
// также добавить дефолтное значение (пакет) если не задано при вызове
//  ошибки

function ShopOrder(defaultValue = {
  package: {
    count: 1,
    price: 5,
    name: 'пакет',
  },
}) {
  const localStorageOrder = JSON.parse(localStorage.getItem('order'));
  let isLocked = false;
  const order = localStorageOrder || defaultValue;
  function checkItem(item) {
    if (!item || typeof item !== 'object') throw new Error('товар не передан');
    if (!item.name || !item.price || (item.count && item.count < 1)) throw new Error('свойства товара не корректны');
  }

  this.addItem = function (item, count = 1) {
    if (isLocked) throw new Error('список заблокирован для изменений');
    else if (count <= 0) {
      throw new Error('параметр count меньше или равен нулю');
    }
    checkItem(item);

    order[item.name] ??= { ...item, count: 0 };
    order[item.name].count += count;
  };
  this.removeItem = function (item, count) {
    if (isLocked) {
      throw new Error('список заблокирован для изменений');
    }
    checkItem(item);

    const orderItem = order[item.name];
    if (!orderItem) {
      throw new Error('в списке нет данной позиции');
    } else if (orderItem.count < count) {
      throw new Error('нельзя убрать больше товаров чем добавлено');
    }

    if (count === orderItem.count || !count) {
      delete order[item.name];
    } else {
      orderItem.count -= count;
    }
  };
  this.getCheck = function () {
    const preparedCheckItems = Object.values(order).map((item) => ({
      ...item,
      fullPrice: item.price * item.count,
    }));

    const preparedCheck = {
      items: preparedCheckItems,
      fullPrice: preparedCheckItems.reduce((accumulator, item) => accumulator + item.fullPrice, 0),
    };

    console.log(`  
        Чек
        ${preparedCheck.items.reduce((accumulator, item) => `${accumulator}
         ${item.name} --- ${item.price} --- кол-во ${item.count} --- ${item.fullPrice}\n`, '')} 
        Полная цена: ${preparedCheck.fullPrice}
        `);

    return preparedCheck;
  };
  this.lockOrder = function () {
    isLocked = true;
  };
  this.unlockOrder = function () {
    isLocked = false;
  };
  this.setLocalStorageValue = function () {
    localStorage.setItem('order', JSON.stringify(order));
  };
}

const testorder = new ShopOrder();

const pivo = {
  name: 'pivo',
  price: 49,
};
const hubaBooba = {
  name: 'jvachka',
  price: 218,
};
const krabi = {
  name: 'cumchatsky krab',
  price: 3000,
};

testorder.addItem(pivo);
testorder.addItem(pivo);
testorder.addItem(hubaBooba);
testorder.addItem(hubaBooba, 5);
testorder.removeItem(hubaBooba, 1);
testorder.removeItem(pivo, 1);
testorder.addItem(krabi, 3);
testorder.getCheck();
testorder.unlockOrder();
// testorder.setLocalStorageValue();

// try {
//   const errorOrder = new ShopOrder();
//   errorOrder.lockOrder();
//   errorOrder.addItem(krabi, -1);
//   errorOrder.removeItem(krabi);
// } catch (e) {
//   console.log(e);
// }
