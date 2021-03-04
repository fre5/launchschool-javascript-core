const rlSync = require('readline-sync');

console.log("Welcome to Mortgage Calculator!");

let askValidate = (message) => {
  let input;
  do  {
    input = rlSync.question(`Please enter the ${message}`);
  } while (isNaN(input) || input === '');
  return parseFloat(input);
};

while (true) {
  let loanAmount = askValidate('loan amount: ');
  let annualRate = askValidate('Annual Percentage Rate (in percentage): ') / 100;
  let loanDuration = askValidate('loan duration (in year(s)): ') * 12;
  loanDuration = loanDuration === 0 ? 1 : '';
  let monthlyRate = annualRate / 12;
  let monthlyPayment;
  let repeat;

  if (monthlyRate !== 0) {
    let denominator = 1 - Math.pow((1 + monthlyRate), (-loanDuration));
    monthlyPayment = loanAmount * (monthlyRate / denominator);
  } else {
    monthlyPayment = loanAmount / loanDuration;
  }

  console.log(`Your monthly payment is ${monthlyPayment.toFixed(2)}`);

  while (true) {
    repeat = rlSync.question("Would you like to make another calculation? (y/n) ").toLowerCase();
    if (repeat === 'y' || repeat === 'n') break;
  }

  if (repeat === 'n') break;
}

console.log("Thank you and goodbye!");


