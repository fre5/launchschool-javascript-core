const rlSync = require('readline-sync');

console.log("Welcome to Mortgage Calculator!");

let repeat; //variable used to determine state of repeating the calculation

do {
  let askValidate = (message) => {
    let input;
    do  {
      input = rlSync.question(`Please enter the ${message}`);
    } while (isNaN(input));
    return parseFloat(input);
  };

  let loanAmount = askValidate('loan amount: ');
  let annualRate = askValidate('Annual Percentage Rate (in percentage): ') / 100;
  let loanDuration = askValidate('loan duration (in year(s)): ') * 12;
  let monthlyRate = annualRate / 12;

  let monthlyPayment;

  if (monthlyRate !== 0) {
    let denominator = 1 - Math.pow((1 + monthlyRate), (-loanDuration));
    monthlyPayment = loanAmount * (monthlyRate / denominator);
  } else {
    monthlyPayment = loanAmount / (loanDuration === 0 ? 1 : '');
  }

  console.log(`Your monthly payment is ${monthlyPayment.toFixed(2)}`);
  do {
    repeat = rlSync.question("Would you like to make another calculation? (y/n) ").toLowerCase();
  } while (repeat !== 'y' && repeat !== 'n');
} while (repeat === 'y');

console.log("Thank you and goodbye!");


