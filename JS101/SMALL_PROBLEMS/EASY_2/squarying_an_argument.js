let multiply = (num1, num2) => num1 * num2;

let square = (num) => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//further exploration
let power = (num, power) => multiply(num, num ** (power - 1));

console.log(power(4,2));