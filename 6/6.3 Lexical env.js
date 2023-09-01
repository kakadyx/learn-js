function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
const counter = makeCounter();
counter();
debugger;
counter();
debugger;
console.log(counter());
