//9 - return a new array with the same structure but with the subarray ordered
//    alphabetically or numerically as appropriate  in ascending order

arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


let newarr = arr.map(element => {
  if (typeof element[0] === 'number') {
    return element.slice().sort((a, b) => a - b);
  } else {
    return element.slice().sort();
  }
})

console.log(newarr);