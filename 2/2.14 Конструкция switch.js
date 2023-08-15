//Напишите "if", аналогичный "switch"
// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Okay we support these browsers too' );
//         break;
//
//     default:
//         alert( 'We hope that this page looks ok!' );
// }
const browser = 'kekw'
if(browser === 'edge'){
    console.log('edge')
} else if (['chrome', 'firefox',' safari','opera'].includes(browser)){
    console.log('we support these browsers too')
} else {
    console.log(' we hope that this page looks ok')
}

console.log('---'.repeat(9))
const test = 1
switch (test){
    case 1:
        console.log('uno')
    case true:
        console.log(true)
    case 'tezt':
        console.log('tezt')
    default:
        console.log('kek what')
} // uno true tezt kek what
console.log('---'.repeat(9))
switch (test){
    default:
        console.log('kek what')
        break;
    case 1:
        console.log('uno')
    case true:
        console.log(true)
    case 'tezt':
        console.log('tezt')
} // uno true tezt
console.log('---'.repeat(9))
switch (0){
    default:
        console.log('kek what')
        break;
    case 1:
        console.log('uno')
    case true:
        console.log(true)
    case 'tezt':
        console.log('tezt')
} // kek what
console.log('---'.repeat(9))
switch (0){
    case 1:
        console.log('uno')
    default:
        console.log('kek what')
    case true:
        console.log(true)
    case 'tezt':
        console.log('tezt')
} // kek what true tezt

//Переписать условия "if" на "switch"
// const number = +prompt('Введите число между 0 и 3', '');
//
// if (number === 0) {
//     alert('Вы ввели число 0');
// }
//
// if (number === 1) {
//     alert('Вы ввели число 1');
// }
//
// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }
{
    const number = +prompt('Введите число между 0 и 3', '');
    switch(number){
        case 0:
            console.log('Вы ввели число 0');
            break;
        case 1:
            console.log('Вы ввели число 1');
            break;
        case 2:
        case 3:
            console.log('Вы ввели число 2, а может и 3');
            break;
    }
}