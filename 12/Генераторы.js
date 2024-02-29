function* pseudoRandom(seed) {
  let previousValue = seed;
  while (true) {
    previousValue *= 16807 % 2147483647;
    yield previousValue;
  }
}

const randomGenerator = pseudoRandom(1);

for (let i = 0; i < 15; i++) console.log(randomGenerator.next(i).value);
console.log(randomGenerator.return('kekek'));
console.log(randomGenerator.next());
// function* testGen() {
//   for (let i = 1; i < 666; i *= 2) { yield i; }
// }
//
// const testGenerator = testGen();
//
// Array(13).fill(0).forEach(() => console.log(testGenerator.next()));
//
// function* genRange() {
//   for (let i = 15; i < 22; i += 2) {
//     yield i;
//   }
// }
// function* getSmth() {
//   yield* genRange();
// }
//
// const genGetSmth = getSmth();
//
// console.log(...genGetSmth);
//
// function* gen() {
//   // Передаём вопрос во внешний код и ожидаем ответа
//   const result = yield '2 + 2 = ?'; // (*)
//
//   console.log(result);
//
//   const result2 = yield 'бибабоба';
//
//   console.log(result2);
// }
//
// const generator = gen();
//
// const question = generator.next(145).value; // переданное значение игнорируется
// console.log(question); // вернулся 2 + 2 из yield
// console.log(generator.next(444).value); // --> передаём параметр в yield прошлый, получаем следующий yield
// generator.next(555);
