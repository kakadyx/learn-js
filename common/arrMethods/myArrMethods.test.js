// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from 'vitest';
import './myArrMethods';

const arrays = {
  basic: [1, 2, 3, 4],
  empty: [],
  duplicatedItems: [5, 5, 5, 5, 5],
  oneItem: ['kek'],
};

arrays.empty.toString = () => 'empty array';

const sumTestPositive = (array, result) => test(`reduce ${array} sum to be equal ${result} | without init value`, () => {
  expect(array.myReduce((acc, curr) => acc + curr)).toBe(result);
});

const sumTestPositiveWithInitAcc = (array, initAcc, result) => test(`reduce ${array} sum to be equal ${result} | init acc ${initAcc}`, () => {
  expect(array.myReduce((acc, curr) => acc + curr, initAcc)).toBe(result);
});

sumTestPositive(arrays.basic, 10);
sumTestPositive(arrays.duplicatedItems, 25);
sumTestPositive(arrays.oneItem, 'kek');

sumTestPositiveWithInitAcc(arrays.basic, 0, 10);
sumTestPositiveWithInitAcc(arrays.basic, 10, 20);
sumTestPositiveWithInitAcc(arrays.basic, null, 10);
sumTestPositiveWithInitAcc(arrays.basic, undefined, 10);
test(`${arrays.empty} sum to throw error | without init value`, () => {
  expect(() => arrays.empty.myReduce((acc, curr) => acc + curr)).toThrowError(/no items with no initial value/);
});
test('non function callback to throw error | without init value', () => {
  expect(() => [].myReduce('lol')).toThrowError(/callback is not a function/);
});
