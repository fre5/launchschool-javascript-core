console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

//for loop
function interleave(array1, array2) {
  let newArray = [];
  for (let index = 0; index < array1.length; index += 1) {
    newArray.push(array1[index], array2[index]);
  }
  return newArray;
}

//forEach
function interleave(array1, array2) {
  let newArray = [];
  array1.forEach((element, index) => {
    newArray.push(element, array2[index])
  });
  return newArray;
}

//map
function interleave(array1, array2) {
  let newArray = array1.map((element, index) => [element, array2[index]]).flat();
  return newArray;
}

//reduce
function interleave(array1, array2) {
  let newArray = [];
  array1.reduce((accumulator, element, index) => newArray.push(element, array2[index]), []);
  return newArray;
}
