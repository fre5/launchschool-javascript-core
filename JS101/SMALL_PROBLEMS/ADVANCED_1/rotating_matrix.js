let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];




/*


[[2, 0],[1, 0],[0, 0]], [[2, 1], [1, 1], [0, 1]], [[2, 2], [1, 2], [0, 2]]

00 01 02
10 11 12
20 21 22

20 10 00     
21 11 01
22 12 02

22 21 20
12 11 10   
02 01 00

*/
function rotate90(matrix) {
  let newArray = [];
  for (let index = 0; index < matrix[0].length; index += 1) {
    let subMatrix = [];
    for (let subIndex = matrix.length - 1; subIndex >= 0; subIndex -= 1) {
      subMatrix.push(matrix[subIndex][index]);
        
    }
    newArray.push(subMatrix);
  }

  
  return newArray;
}



console.log(rotate90(matrix1));      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]



console.log(rotate90(matrix2));      // [[5, 3], [1, 7], [0, 4], [8, 2]]

console.log(rotate90(rotate90(rotate90(rotate90(matrix2)))));      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
