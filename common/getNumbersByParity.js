// Реализуйте функцию getNumbersByParity,
// которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго.
// Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных,
// если было передано "odd". Оба аргумента функции обязательны.
// Первый обязательно будет массивом, а второй - строкой "even"/"odd".

function getNumbersByParity(arr, type) {
  return arr.filter((_, index) => (type === 'odd' ? index % 2 === 0 : index % 2 !== 0));
}

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];`
