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
