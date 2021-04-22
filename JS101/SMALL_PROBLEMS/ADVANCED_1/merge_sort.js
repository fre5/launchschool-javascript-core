/*
Problem :
- Write a function with a recursive sorting algorithm that converts an array into subarrays and return a sorted array 

Rules :
- Can use the merge algorithm from previous exercise
- Cannot use sort() method

Examples :
[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

*/

console.log(mergeSort([5, 3]));                 // [3, 5]

console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
/*
Data structure :
- Input : array
- output : sorted array

Algorithm :
- Put merge function from the last exercise
- declare an empty array sub
- declare an empty array result
- if length of array is equal to 1 :
  - return array
- if length of array is equal to 2 :
  - if the first element is an array, return array input flattened
  - if not, if first element is bigger, return an array with first element the one with smaller value
- create a for loop :
  - if index remainder of 2 equals to 0 :
    - push array element at index to sub
    - if it's one before the last element 
      - push element to result
  - if index remainder of 2 is not equal to 0 
    - push element to sub
    - push sub to result
    - empty sub
- declare a variable newArr, assign it to result with map, where each element is a return from its own function with elemen as the argument
- declare a variable flatArr, assign it to newArr, where each element is flatten with .flat()
- declare a variable sort, assign it to flatArr with reduce method. use merge function as the return with accumulator and element as the arguments
- return sort value
*/

function merge(arr1, arr2) {
  let newArr1 = arr1.slice();

  arr2.forEach(element => {
    let spliceIndex = newArr1.find(subElement => {
      return element < subElement;
    });

    if (spliceIndex === undefined) {
      newArr1.push(element);
    } else {
      newArr1.splice(newArr1.indexOf(spliceIndex), 0, element);
    }
  });

  return newArr1;
}

function mergeSort(array) {
  let sub = [];
  let result = [];

  if (array.length === 1) {
    return array;
  } else if (array.length === 2) {
    if (Array.isArray(array[0])) {
      return array.flat();
    } else {
      return array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]];
    }
  } 
  
  for (let index = 0; index < array.length; index += 1) {
    if (index % 2 === 0) {
      sub.push(array[index]);
      if (index === array.length - 1) {
        result.push(sub);
      }
    } else {
      sub.push(array[index]);
      result.push(sub);
      sub = [];
    }
  }

  let newArr = result.map(element => mergeSort(element));
  let flatArr = newArr.map(element => element.flat());
  
  let sort = flatArr.reduce((acc, ele) => merge(acc, ele), []);

  return sort;
}

