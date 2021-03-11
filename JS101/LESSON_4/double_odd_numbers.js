function doubleOddNumbers(numbers) {
  let newNumbers = [];
  for (let index = 0; index < numbers.length; index += 1) {
    let currentNumber = numbers[index];
    if (currentNumber % 2 !== 0) {
      newNumbers.push(currentNumber * 2);
    } else {
      newNumbers.push(currentNumber);
    }
  }
  return newNumbers;
}


let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// not mutated
myNumbers;     