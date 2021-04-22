/*
Problem :
- Write a function that takes two sorted arrays as arguments, and returns a new array that contains all elements from both input arrays in sorted order.

Rules :
- Cannot sort the result array, must be built one element at a time in the proper order
- The solution should not mutate the input arrays

Input : Two arrays
Output : One sorted array from the two input arrays

Examples / Test cases :
*/
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]

console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
/*
Data structure :
- Declare and initialize a variable named newArray and assign it an empty array 
- Return the variable newArray

Algorithm :
- Declare an empty array, assign it to a copy of input array 1
-

*/

function merge(array1, array2) {
  let newArray1 = array1.slice();

  array2.forEach(element => {
    let spliceIndex = newArray1.find(subElement => {
      return element < subElement;
    });

    if (spliceIndex === undefined) {
      newArray1.push(element);
    } else {
      newArray1.splice(newArray1.indexOf(spliceIndex), 0, element);
    }
    

  });

  return newArray1;
}