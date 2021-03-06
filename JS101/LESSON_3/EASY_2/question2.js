let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
newNumbersReverse = [];

//reverse
for(let index = numbers.length-1; index >= 0; index -= 1) {
  newNumbersReverse.push(numbers[index]);
}
console.log(newNumbersReverse);

//or

//slice copies the array and does not mutate the original
newNumbersReverse = numbers.slice().reverse();
console.log(newNumbersReverse);

//spread operator ... does not mutate original array
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

//using forEach 
numbers.forEach((number) => {
  newNumbersReverse.unshift(number)
})
