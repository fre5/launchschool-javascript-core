const rlSync = require('readline-sync');

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let prompt = message => {
  console.log(`=> ${message}`);
};

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

console.log('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = rlSync.question();

while (invalidNumber(number1)) {
  prompt("Please enter a valid number");
  number1 = rlSync.question();
}

prompt("What's the second number?");
let number2 = rlSync.question();

while (invalidNumber(number2)) {
  prompt("Please enter a valid number");
  number2 = rlSync.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Substract 3) Multiply 4) Divide');
let operation = rlSync.question();

while (!['1','2','3','4'].includes(operation)) {
  prompt('Please select the following option');
  operation = rlSync.question();

}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}


console.log(`The result is: ${output}`);