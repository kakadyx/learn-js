// Реализуйте (с использованием рекурсии) функцию getStringCount,
// которая должна принимать массив или объект и считать количество строк
// в массиве / значениях объекта с учетом вложенности.
// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount

const stringCountCacheMap = new WeakMap();
function reduceCb(acc, currentValue) {
  if (typeof currentValue === 'string') {
    return acc + 1;
  } if (typeof currentValue === 'object') return acc + getStringCount(currentValue);
  return acc;
}
function getStringCount(obj) {
  if (!obj) return 0;
  if (typeof obj === 'object' && stringCountCacheMap.has(obj)) {
    console.log('cached', stringCountCacheMap.get(obj));
    return stringCountCacheMap.get(obj);
  }
  if (typeof obj === 'object') {
    let values = null;
    if (Array.isArray(obj)) {
      values = obj;
    } else {
      values = Object.values(obj);
    }
    const count = values.reduce(reduceCb, 0);
    stringCountCacheMap.set(obj, count);
    return count;
  }

  return 0;
}
const itemToCheck = {
  first: '1',
  second: { prop: '2' },
  third: false,
  fourth: ['anytime', 2, 3, 4],
  fifth: null,
};
const arrToCheck = ['1', '2', ['3', ['123', '231'], itemToCheck]];
console.log(getStringCount(itemToCheck)); // 3
console.log(getStringCount(itemToCheck)); // 3
console.log(getStringCount(arrToCheck));
console.log(getStringCount(arrToCheck));
