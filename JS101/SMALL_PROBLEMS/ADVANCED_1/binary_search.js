/*
Problem : write a function that takes an array and a searchItem as arguments, 
and returns the index of searchItem if found, or -1 searchItem is not found in array

Rules :
- Assume array is sorted
- Use binary search method (no .find() or brute force)

Example / test cases :
*/
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
/*
Data structure :
- Input : array and searchIteam
- Output : integer of index or - 1

Algorithm :
- find middle index of array 
- find the end index
- find the beginning index
- create a loop, run until array length is 0
  - check if middle value is equal, less, or more than array element at middle index
    - if middle value element is equal to search item , return index
    - if middle is less, remove first half left of middle value
      - assign start index to middleValue
    - if middle is more, remove first half right of middle value
      - assign end index to middleValue
  - re-assign middle value to endindex - startindex divided by 2 the add the total to startindex
  - if element at start index is equal to search item, return startindex if true
  - if element at end index is equal to search item, return endindex if true
  - If middleValue is equal to startIndex or endIndex, return -1
*/

function binarySearch(array, searchItem) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleValue = Math.floor(array.length / 2);
  while(true) {
    if (array[middleValue] === searchItem) {
      return middleValue;
    } else if (array[middleValue] < searchItem) {
      startIndex = middleValue;
    } else if (array[middleValue] > searchItem) {
      endIndex = middleValue;
    }
    middleValue = (Math.floor((endIndex - startIndex) / 2)) + startIndex;
    if (array[startIndex] === searchItem) {
      return startIndex;
    } else if (array[endIndex] === searchItem) {
      return endIndex;
    } else if (middleValue === endIndex || middleValue === startIndex) {
      return -1;
    }
  }
}