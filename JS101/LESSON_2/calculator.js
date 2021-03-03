const rlSync = require('readline-sync');
const jsonObj = require('./calculator_messages.json');
const LANGUAGE = 'en';
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let messages = (message, lang='en') => {
  return jsonObj[lang][message];
}

let prompt = msg => {
  let message = messages(msg, LANGUAGE);
  console.log(`=> ${message}`);
};

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('greeting');

let repeat;

do {
  prompt('number1');
  let number1 = rlSync.question();

  while (invalidNumber(number1)) {
    prompt(jsonObj.invalid);
    number1 = rlSync.question();
  }

  prompt('number2');
  let number2 = rlSync.question();

  while (invalidNumber(number2)) {
    prompt('invalid');
    number2 = rlSync.question();
  }

  prompt('operation');
  let operation = rlSync.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt('select');
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


  console.log(`${messages('result')} ${output}`);
  do {
    repeat = rlSync.question(messages('repeat'));
    repeat = repeat.toLowerCase();
  } while (repeat !== 'y' && repeat !== 'n');
} while (repeat === 'y');


