console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

function runningTotal(array) {
  let newArray = [];
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
    newArray.push(sum);
  }
  return newArray;
}

function runningTotalMap(array) {
  let sum = 0;
  return array.map(num => sum += num);
}

console.log(runningTotalMap([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalMap([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalMap([3]));                    // [3]
console.log(runningTotalMap([]));                     // []


