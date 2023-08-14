'use strict';

{
    let a = 1, b = 1;

    let c = ++a; // 2
    let d = b++; // 1
}

{
    let a = 2;

    let x = 1 + (a *= 2);
    console.log(a, x) // a = 4 | x = 5
}

{
    "" + 1 + 0 // 10
    "" - 1 + 0 // -1
    true + false // 1
    6 / "3" // 2
    "2" * "3" // 6
    4 + 5 + "px" // 9px
    "$" + 4 + 5 // $45
    "4" - 2 // 2
    "4px" - 2 // NaN
    "  -9  " + 5 //       -9      5
    "  -9  " - 5 // -14
    null + 1 // 1
    undefined + 1 // NaN
    " \t \n" - 2 // -2 | спецсимволы не считываются
}

{
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);

    alert(+a + +b); // 12
}

const k123 = 123
const k321 = -321

console.log(-k123) // -123
console.log(+k321) // -321

const num = '123'
const text = 'text'
const empty = ''

console.log('-'.repeat(20))
console.log(num + num) // 123123
console.log(num + k123) // 123123
console.log(k321 + num) // -321123
console.log(num + k321) // 123-321
console.log('-'.repeat(20))
console.log(num - k123) // 0
console.log(k123 - num) // 0
console.log(text - num) // NaN
console.log(empty - k321) // 321
console.log('-'.repeat(20))
console.log(k123 / num) // 1
console.log(num / num) // 1
console.log('-'.repeat(20))
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+Object) // NaN
console.log(+'') // 0
console.log(NaN ** 0) // 1
console.log(NaN ** 1) // NaN
console.log({} ** 0) // 1
console.log({} ** 1) // NaN
console.log('-'.repeat(20))

let number = 2
console.log(number **= 2) //  number = number ** 2 | number = 4
console.log(number /= 4) // number = number / 4 | number = 1
console.log(number *= 25) // number = number * 25 | number = 25
console.log(number **= (1/2)) // number = number ** (1/2) | number = 5 | (1/2) в скобках чтобы не потерять приоритет
number = 1
console.log(++number) // 2 | number = 2 | number += 1 | number = number + 1
console.log(number--) // 2 | number = 1 | number -= 1 | number = number - 1
console.log(--number) // 0 | number = 0 | префиксная форма возвращает новое значение
console.log(number++) // 0 | number = 1 | постфиксная форма возвращает старое значение
