//13 - sort the array so the sub arrays are ordered based on the sum of the odd numbers
arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  a.filter(num => num % 2 === 1).reduce((acc, ele) => acc + ele, 0);
  b.filter(num => num % 2 === 1).reduce((acc, ele) => acc + ele, 0);
  
  console.log(b);
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
})

console.log(arr);