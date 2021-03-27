function bubbleSort(array) {
  do {
    for (let index = 0; index < array.length - 1; index += 1) {  
      if (!compareElements(array[index], array[index + 1])) {
        swap(array, index);
      }
    }
  }
  while (!checkSorted(array)); 
  return array;  
}

function swap(array, index) {
  let swap = array[index];
  array[index] = array[index + 1];
  array[index + 1] = swap;
  return array;
}

function compareElements(value1, value2) {
  return value1 <= value2;
}

function checkSorted(array) {
  for (let index = 0; index < array.length - 1; index += 1){
    if (!compareElements(array[index], array[index + 1])) {
      return false;
    } 
  }
  return true;
}


//testing checkSorted
console.log(checkSorted([1,2,3,4,5]));
console.log(checkSorted([4,3,6,5]));

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
