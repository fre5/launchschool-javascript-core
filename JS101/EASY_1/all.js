
console.log("Isn't it Odd?");

let isOdd = (number) => number % 2 !== 0 ? true : false;
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

////with Math.abs

let isOddMath = (number) => Math.abs(number) % 2 === 1 ? true : false;

console.log(isOddMath(2)); // => false
console.log(isOddMath(5)); // => true
console.log(isOddMath(-17)); // => true
console.log(isOddMath(-8)); // => false
console.log(isOddMath(0)); // => false
console.log(isOddMath(7)); // => true


console.log("Odd Numbers");

for(let num = 1; num <= 99; num += 2) {
  console.log(num);
}

console.log("Even Numbers");

for(let num = 1; num <= 99; num += 1) {
  num % 2 === 0 ? console.log(num) : '';
}

console.log("How big is the room?");

const rlSync = require('readline-sync');

let length = rlSync.question("Enter the length of the room in meters: ");
let width = rlSync.question("Enter the width of the room in meters: ");
console.log(`The are of the room is ${length * width} square meters (${((length * width) * 10.7639).toFixed(2)} square feet)`);

console.log("Tip Calculator");

let bill = parseFloat(rlSync.question("What is the bill? "));
let tipPercentage = parseFloat(rlSync.question("What is the tip percentage? "));
let tipAmount = bill * (tipPercentage / 100);
console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${(bill + tipAmount).toFixed(2)}`);

console.log("Sum of Product of Consecutive Integers");

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

console.log("Short Long Short")

let shortLongShort = (string1, string2) => {
    if(string1.length > string2.length) {
        console.log(string2 + string1 + string2);
    } else {
        console.log(string1 + string2 + string1);
    }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
     
console.log("Leap Years (Part 1)");

let isLeapYear = year => {
  if(year % 4 === 0) {
    if(year % 100 === 0) {
      if(year % 400 === 0) {
        return true;
      } 
      return false;
    } 
    return true;
  } else {
    return false;
  }
}

//or

let isLeapYear = year => {

  if(year < 1752) {
    return year % 4 === 0;
  } else {
    if(year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  } 
}

console.log(isLeapYear(2016));      
console.log(isLeapYear(2015));      
console.log(isLeapYear(2100));      
console.log(isLeapYear(2400));      
console.log(isLeapYear(240000));    
console.log(isLeapYear(240001));    
console.log(isLeapYear(2000));      
console.log(isLeapYear(1900));      
console.log(isLeapYear(1752));      
console.log(isLeapYear(1700));      
console.log(isLeapYear(1));         
console.log(isLeapYear(100));       
console.log(isLeapYear(400));       

console.log("Multiples of 3 and 5");

let multisum = num => {
  let sum = 0;
  for(let i = 0; i <= num; i += 1) {
    if(i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168


console.log("ASCII String Value");

let asciiValue = string => {
  let sum = 0;
  for(let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }
  console.log(sum);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

