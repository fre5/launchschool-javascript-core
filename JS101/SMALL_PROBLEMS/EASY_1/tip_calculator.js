let bill = parseFloat(rlSync.question("What is the bill? "));
let tipPercentage = parseFloat(rlSync.question("What is the tip percentage? "));
let tipAmount = bill * (tipPercentage / 100);
console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${(bill + tipAmount).toFixed(2)}`);
