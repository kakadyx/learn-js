// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// const counter = makeCounter();
// counter();
// debugger;
// counter();
// debugger;
// console.log(counter());

// Фильтрация с помощью функции
{
  function inBetween(min, max) {
    return (item) => item >= min && item <= max;
  }
  function inArray(arr) {
    return (item) => arr.includes(item);
  }

  console.log([1, 2, 3, 4, 5, 6, 7, 8].filter(inBetween(2, 5)));
  console.log([1, 2, 3, 4, 5, 6, 7, 8].filter(inArray([3, 7, 1, 212])));
}
// Армия функций
{
  function makeArmy() {
    const shooters = [];

    let i = 0;
    while (i < 10) {
      const num = i;
      debugger;
      const shooter = function () { // функция shooter
        console.log(num); // должна выводить порядковый номер
      };
      shooters.push(shooter); // и добавлять стрелка в массив
      i++;
    }

    // ...а в конце вернуть массив из всех стрелков
    return shooters;
  }

  const army = makeArmy();

  // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
  army[0](); // 10 от стрелка с порядковым номером 0
  army[1](); // 10 от стрелка с порядковым номером 1
  army[2](); // 10 ...и т.д.
}
