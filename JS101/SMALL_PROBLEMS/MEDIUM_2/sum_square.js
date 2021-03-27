function sumSquareDifference(number) {
  let array = [];

  for(let index = 1; index <= number; index += 1) {
    array.push(index);
  }

  let sumSquare = array.reduce((accumulator, element) => accumulator + element, 0) ** 2;

  let squareSum = array.reduce((accumulator, element) => accumulator + (element ** 2), 0);

  return sumSquare - squareSum;
}



/*

Problem:
Write a function that computes the difference between the square of the sum of the first positive integers 


Examples:
(3) -> 22
(1 + 2 + 3) ** 2  - (1 ** 2 + 2 ** 2 + 3 ** 2)


Data Structure:
- Input is a integer
- Output is an integer
- Use a loop to get all numbers up to the input number
- Find the sum of all the numbers starting from 1 up to the number
- Sum each element with the result of its square
- Return the sum square minus square sum 

Algorithm:

- Declare and initialize a variable named array and assign it an empty value 
- Create an array and populate it with all the index numbers up to the argument number
- Use reduce to get the sum and square the elements of number 
- Use reduce to get the square and then sum all the squared elements
- Return the sumSquared minus the squaredSum.
*/



console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150