function rotateRightmostDigits(number, count) {
  let lastNumber;
  let stringArray = number.toString().split('');
  return stringArray.filter((element, index) => {
    if (index !== number.toString().length - count) {
      return true;
    } else {
      lastNumber = element;
      return false;
    }
  }).concat(lastNumber).join('');
}
/*
Input : Number and count
Output : The rotated number
Rules : Counting from the last digit of number, the digit will be moved to the last element
Algorithm: 
- Declare, initalized and assign a new variable stringArray with a value of number converted into a string and split into an array with each elements consisting of individual numbers.
- Declare a variable named lastNumber.
- Using method chaining return a stringArray with a filter method using its index to populate a new array where index is not equal to the length of number minus count which is the index number specified to look for the digit. In this case, we need to convert number into a string to be able to use length.
- Within the filter method, in the even that index is equal to the length of number minus the count, lastNumber variable is assigned the string value of element.
- The result of the populated array from filter then concatenated using the method of concat with the value of lastNumber variable.
- The last method will be to join the array and convert it into a string.
*/




console.log(rotateRightmostDigits(735291, 1));      // 735291     5
console.log(rotateRightmostDigits(735291, 2));      // 735219     4
console.log(rotateRightmostDigits(735291, 3));      // 735912     3
console.log(rotateRightmostDigits(735291, 4));      // 732915     2
console.log(rotateRightmostDigits(735291, 5));      // 752913     1
console.log(rotateRightmostDigits(735291, 6));      // 352917     0