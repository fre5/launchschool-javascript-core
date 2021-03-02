let integer = Number(rlSync.question("Please enter an integer greater than 0:"));
let instruction; //do while will give an error if this is not declared first
do {
  instruction = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product.");
} while (instruction !== "s" && instruction !== "p")

if(instruction === "s") {
  let sum = 0;
  for(let i = 0; i <= integer; i += 1) { sum += i;}
  console.log(`\nThe sum of the integers between 1 and ${integer} is ${sum}`) 
} else { //since input is validated if it's not "s" then it must be "p"
  let product = 1;
  for(let i = 1; i <= integer; i += 1) { product *= i;}
  console.log(`\nThe product of the integers between 1 and ${integer} is ${product}`)
} 