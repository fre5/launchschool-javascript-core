const rlSync = require('readline-sync');

let firstNum = '';
let secondNum = '';

while (true) {
  console.log('Enter the first number: ');
  firstNum = Number(rlSync.prompt());
  if (!isNaN(firstNum)) {
    break;
  }
}

while (true) {
  console.log('Enter the second number: ');
  secondNum = Number(rlSync.prompt());
  if (!isNaN(secondNum)) {
    break;
  }
}


console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`${firstNum} ** ${secondNum} = ${BigInt(firstNum ** secondNum)}`);
