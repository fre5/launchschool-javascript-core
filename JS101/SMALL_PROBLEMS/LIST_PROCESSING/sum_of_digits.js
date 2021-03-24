//Write a function that takes a positive integer and returns the sum of its digits.

function sum(number) {
  return String(number).split('').reduce((accumulator, element) => {
    return accumulator + parseInt(element, 10);
  }, 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45