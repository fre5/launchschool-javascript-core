**PROBLEM**

Write a function that takes an array of numbers, and add a join word before the last element of the array. 


**EXAMPLE**

***Input & output*** 
joinOr([1, 2, 3]); output "1, 2, or 3"
joinOr([1, 2, 3], '; '); output "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and'); output "1, 2, and 3"
joinOr([]); output ""
joinOr([5]); output "5"
joinOr([1, 2]); output "1 or 2"

**DATA STRUCTURE**

- Returns a string
- Has three arguments 
  - First parameter takes an array of strings argument
  - Second parameter takes a delimiter with a default value
  - Third parameter takes a join word with a default value

**ALGORITHM**

- If input array is empty, return an empty string
- If input array only has one value, return the value as string
- If input array has two values, return with the join word and without delimiter
- If input has three or more values, return the concatenation of the values :
  - Add the delimiter between each varray values
  - Add the join word before the last element

**CODE**
function joinOr(arr, separator = ', ', joinWord = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${joinWord} `);
    default:
      return arr.slice(0, arr.length - 1).join(separator) + `${separator}${joinWord} ${arr[arr.length - 1]}`;
  }
}


