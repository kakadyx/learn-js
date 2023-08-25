'use strict';
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
// также добавить дефолтное значение если не задано обратно (пакет)
// хэндлить ошибки
class CountError extends Error {

  constructor() {
      super();
      this.message = 'oreder list locked'

  }
}

function ShopOrder () {
    let isLocked = false
    const order = {}

    this.addItem = function (item, count = 1) {
        if (isLocked) return;

        if (count > 0) {
            order[item.name] ??= { ...item, count: 0 }
            order[item.name].count += count
        } else {
            throw new CountError
        }
    }
    this.removeItem = function (item, count) {
        const orderItem = order[item.name]
        if (isLocked || !orderItem) return;

        if (!count || orderItem.count <= count) {
            delete order[item.name]
        } else {
            orderItem.count -= count
        }
    }
    this.getCheck = function () {
        const preparedCheckItems = Object.values(order).map((item) => {
            return {
                ...item,
                fullPrice: item.price * item.count
            }
        })

        const preparedCheck = {
            items: preparedCheckItems,
            fullPrice: preparedCheckItems.reduce((acc, item) => acc + item.fullPrice, 0)
        }

        console.log(`
        Чек
        ${preparedCheck.items
            .reduce((acc,  item) => acc + `
            ${item.name} --- ${item.price} --- кол-во ${item.count} --- ${item.fullPrice}\n`, ``)
        }
        
        Полная цена: ${preparedCheck.fullPrice}
        `)

        return preparedCheck
    }
    this.lockOrder = function () {
        isLocked = true
    }
    this.unlockOrder = function () {
        isLocked = false
    }
}

const testorder = new ShopOrder()

const pivo = {
    name: 'pivo',
    price: 49
}
const hubaBooba = {
    name: 'jvachka',
    price: 218
}
const krabi = {
    name: 'cumchatsky krab',
    price: 3000
}

testorder.addItem(pivo)
testorder.addItem(pivo)
testorder.removeItem(hubaBooba)
testorder.addItem(hubaBooba, 5)
testorder.removeItem(hubaBooba, 3)
testorder.removeItem(pivo, 3)
testorder.lockOrder()
testorder.unlockOrder()
testorder.addItem(krabi, 3)
testorder.getCheck()