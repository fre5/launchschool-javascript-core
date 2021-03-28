const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

//let newMatrix = transpose(matrix);

//console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
//console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transpose(matrix) {

  let newMatrix = [];
  for (let index = 0; index < matrix.length; index += 1) {
    let subMatrix = [];
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex += 1) {
     subMatrix.push(matrix[subIndex][index]);
    }
    newMatrix.push(subMatrix);
  }
  return newMatrix;
}

console.log(transpose(matrix));

/*
function transpose(matrix) {
  return matrix.map((element, index) => {
    return element.map((_, subIndex) => {
      return  matrix[index][subIndex] = matrix[subIndex][index];
    })
  });
}
*/