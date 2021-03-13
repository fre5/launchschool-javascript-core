//12 - use a combination of methods including filter, to return a new array
//     identical with the original structure but containing only numbers that
//     are multiples of 3

arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multipleThree = arr.map(array => {
  return array.filter(number => number % 3 === 0);
});

console.log(multipleThree);