const rlSync = require('readline-sync');

console.log("Welcome to Mortgage Calculator!");

let askValidate = (message) => {
  let input;
  do  {
    input = parseFloat(rlSync.question(`Please enter the ${message}`));
  } while(isNaN(input))
  return input;
}

let loanAmount = askValidate('loan amount: ');
let annualRate = askValidate('Annual Percentage Rate (in percentage): ') /100;
let loanDuration = askValidate('loan duration (in year(s)): ') * 12;
let monthlyRate = annualRate / 12;

let monthlyPayment;

if(monthlyRate !== 0) {
  monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
} else {
  monthlyPayment = loanAmount / loanDuration;
}

console.log(`Your monthly payment is ${monthlyPayment.toFixed(2)}`);


