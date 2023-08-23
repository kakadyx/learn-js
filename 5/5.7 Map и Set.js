{
    // Допустим, у нас есть массив arr.
//
//     Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

    function unique(arr) {
        return Array.from(new Set(arr))
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log(unique(values)); // Hare,Krishna,:-O
 }

{
    // Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
    //
    // Например:
    // nap - pan
    // ear - are - era
    // cheaters - hectares - teachers
    // Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    function aclean(arr){
        const itemsMap = new Map()
        arr.forEach(item => {
            const itemKey = [...item.toLowerCase()].sort().join('')
            itemsMap.set(itemKey, itemsMap.has(itemKey) ? [...itemsMap.get(itemKey), item] : [item])
        })
        return Array.from(itemsMap.values()).map(item => item[0])
    }
    console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
}
{
    // Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
    //
    // Но это не выходит:
    let map = new Map();

    map.set("name", "John");

    let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
    keys.push("more");
    console.log(keys)
}