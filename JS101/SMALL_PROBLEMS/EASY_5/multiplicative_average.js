console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplicativeAverage(array) {
  return (array.reduce((accumulative, element) => accumulative * element, 1) / array.length).toFixed(3);
}