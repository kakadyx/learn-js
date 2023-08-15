//Какое последнее значение выведет этот код?
{
    let i = 3;

    while (i) {
        console.log( i-- ); // 3 2 1
    }
}
console.log('---'.repeat(9))
{
    let i = 0;
    while (++i < 5) console.log( i ); // 1 2 3 4
}
console.log('---'.repeat(9))
{
    let i = 0;
    while (i++ < 5) console.log(i); // 1 2 3 4 5
}
console.log('---'.repeat(9))
{
    for (let i = 0; i < 5; i++) console.log( i ); // 0 1 2 3 4
}
console.log('---'.repeat(9))
{
    for (let i = 0; i < 5; ++i) console.log( i ); // 0 1 2 3 4
}
console.log('---'.repeat(9))
//При помощи цикла for выведите чётные числа от 2 до 10.
{
    for(let i = 2; i <= 10; i+=2) console.log(i)
}
console.log('---'.repeat(9))
//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
{
    let i = 0
    while(i < 3){
        console.log(`number ${i++}!`);
    }
}
console.log('---'.repeat(9))
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк в этой задаче необязательно.
// {
//     do {
//         let answer = prompt('Введите число > 100');
//         if(+answer > 100 || answer === null)
//             break;
//
//     } while (true)
// }
console.log('---'.repeat(9))
//Вывести простые числа
{
     function logSimpleNumbers(max){
         const start = 2
         if(start > max) return;
         for(let i = start; i <= max; i++) {
             let isSimple = true
             for (let j = start; j < i; j++) {
                 if (i % j === 0) {
                     isSimple = false
                     break
                 }
             }
         isSimple && console.log(i)
         }
     }

    logSimpleNumbers(15) //2 3 5 7 11 13
    logSimpleNumbers(25) //2 3 5 7 11 13 17 19 23

}
