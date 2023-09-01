// Факториал
{
  function factorial(number) {
    return number !== 1 ? number * factorial(number - 1) : 1;
  }
  console.log(factorial(5)); // 120
}
// Числа Фибоначчи
{
  function fib(number) {
    return number <= 1 ? 1 : fib(number - 1) + fib(number - 2);
  }
  console.log(fib(5)); // долго

  function forFib(number) {
    if (number <= 2) return 1;
    let [num1, num2] = [1, 1];
    for (let i = 3; i < number; i += 1) {
      if (i % 2) num1 += num2;
      else num2 += num1;
    }
    return num1 + num2;
  }
  console.log(forFib(77)); // быстро
  console.log(forFib(5)); // быстро
}
console.log('-'.repeat(25));
// Вывод односвязного списка
{
  const list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  function printList(list, type) {
    if (type === 'recursion') {
      console.log(list.value);
      if (list.next) printList(list.next, 'recursion');
    } else {
      for (let item = list; item !== null; item = item.next) {
        console.log(item.value);
      }
    }
  }

  // printList(list, 'recursion'); // 1 2 3 4
  printList(list, 'cycle'); // 1 2 3 4
}
console.log('-'.repeat(25));

// Вывести односвязный список в обратном порядке
{
  const list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };
  function printReverseList(list, type) {
    if (type === 'recursion') {
      if (list.next) printReverseList(list.next, 'recursion');
      console.log(list.value);
    } else {
      const arr = [];
      for (let item = list; item !== null; item = item.next) {
        arr.unshift(item.value);
      }
      arr.forEach((item) => console.log(item));
    }
  }
  printReverseList(list, 'recursion');
  printReverseList(list, 'cycle');
}
