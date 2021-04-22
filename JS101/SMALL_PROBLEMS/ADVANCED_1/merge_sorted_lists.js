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
- Use a for loop to iterate each elements.
- In the loop Each elements need to be compared with elements of the same array, and the other array

Code:
*/

function merge(array1, array2) {
  //Use a spread operator to make a duplicate of an array
  let newArray = [...array1];

  //Iterate array2 
  array2.forEach(element => {
    //Declare a new variable that its values is a return product from 
    let nextSmallestIndex = newArray.find(subElement => {
      return element < subElement;
    });
    if (nextSmallestIndex === undefined) {
      newArray.push(element);
    } else {
      newArray.splice(newArray.indexOf(nextSmallestIndex), 0, element);
    }
  })
  return newArray;
}


/*

1 - 2  arr1[0] - arr2[0]
1 - 6  arr1[0] - arr2[1]
1 - 8  arr1[0] - arr2[2]
 
1

2 - 5  arr2[0] - arr1[1]
2 - 9  arr2[0] - arr1[2]

2

5 - 6  arr1[1] - arr2[1]
5 - 8  arr1[1] - arr2[2]

5

6 - 9  arr2[1] - arr1[2]

6     

8 - 9  arr1[2] - arr2[2]

8

9



*/