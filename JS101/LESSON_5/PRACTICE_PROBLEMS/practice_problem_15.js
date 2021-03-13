//15 - return an array which contains only the objects where all the numbers are even
arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenArr = arr.filter(obj => Object.values(obj).every(ele => ele.every(num => num % 2 === 0)));

console.log(evenArr);