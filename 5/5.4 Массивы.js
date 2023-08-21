'use strict';
{
// Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log(fruits.length); // 4
}

{
    // Давайте произведём 5 операций с массивом.
    //
    // Создайте массив styles с элементами «Джаз» и «Блюз».
    // Добавьте «Рок-н-ролл» в конец.
    // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
    // Удалите первый элемент массива и покажите его.
    // Вставьте Рэп и Регги в начало массива.
    const styles = ['Джаз', 'Блюз']
    styles.push('Рок-н-ролл')
    styles[Math.ceil(styles.length / 2) - 1] = 'Классика'
    styles.shift()
    styles.unshift('Рэп', 'Рэгги')
    console.log(styles)
}
{
    // Каков результат? Почему?
    let arr = ["a", "b"];

    arr.push(function() {
        console.log( this );
    });

    arr[2](); // [a, b, func]
}
{
    // На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
    // Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
    // Функция getMaxSubSum(arr) должна возвращать эту сумму.
    // Например:

    function getMaxSubSum(arr){
        return arr.reduce((acc, curr) => {
            if(acc.at(-1) <= 0){
                return [...acc, curr];
            } else if (curr > 0) {
                acc[acc.length - 1] += curr;
                return [...acc];
            } else {
                return [...acc, curr]
            }
        }, [0]).sort((a, b) => a - b).at(-1)
    }
    console.log(getMaxSubSum([-1, 2, 3, -9]) == 5) // (сумма выделенных элементов)
    console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6)
    console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11)
    console.log(getMaxSubSum([-2, -1, 1, 2]) == 3)
    console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100)
    console.log(getMaxSubSum([1, 2, 3]) == 6) // (берём все)
}