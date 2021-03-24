function multiplyAllPairs(array1, array2) {
  let result = [];
  
  array1.forEach(element => {
    array2.forEach(subelement => {
      result.push(element * subelement);
    })
  });
  return result.sort((a, b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]