console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
//console.log(findFibonacciIndexByLength(100n) === 476n);     //Check memory before running this and below
//console.log(findFibonacciIndexByLength(1000n) === 4782n);
//console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

function findFibonacciIndexByLength(number) {
  let array = [];
  let counter = 0;
  while (true) {
    if (counter === 0 || counter === 1) {
      array.push(1);
    } else {
      let lastNumber = array[counter - 1] + array[counter - 2];
      array.push(lastNumber);
      if (String(lastNumber).length === Number(number)) {
        break;
      }
    }
    counter += 1;
  }
  return BigInt(counter + 1);
}

