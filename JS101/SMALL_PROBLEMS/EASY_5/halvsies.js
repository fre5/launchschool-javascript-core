console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

function halvsies(array) {
  let splitIndex = Math.ceil(array.length/2);
  return [(array.slice(0, splitIndex)), array.slice(splitIndex, array.length)];
}