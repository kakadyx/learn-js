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
function ShopOrder () {
    let isLocked = false
    const receipt = {}

    this.addItem = function (item, count = 1) {
        if (isLocked) return;

        if (count > 0) {
            receipt[item.name] ??= { ...item, count: 0 }
            receipt[item.name].count += count
        }
    }
    this.removeItem = function (item, count) {
        const receiptItem = receipt[item.name]
        if (isLocked || !receiptItem) return;

        if (!count || receiptItem.count <= count) {
            delete receipt[item.name]
        } else {
            receiptItem.count -= count
        }
    }
    this.getCheck = function () {
        const preparedCheckItems = Object.values(receipt).map((item) => {
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

const testReceipt = new ShopOrder()

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

testReceipt.addItem(pivo)
testReceipt.addItem(pivo)
testReceipt.removeItem(hubaBooba)
testReceipt.addItem(hubaBooba, 5)
testReceipt.removeItem(hubaBooba, 3)
testReceipt.removeItem(pivo, 3)
testReceipt.lockOrder()
testReceipt.unlockOrder()
testReceipt.addItem(krabi, 3)
testReceipt.getCheck()