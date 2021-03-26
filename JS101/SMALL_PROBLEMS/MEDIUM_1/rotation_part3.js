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

function maxRotation(number) {
  let processNumber;
  for (let index = number.toString().length; index > 0; index -= 1) {
  
    if (processNumber === undefined) {
      processNumber = rotateRightmostDigits(number, index);
    } else {
      processNumber = rotateRightmostDigits(processNumber, index);
    }
    
  }
  return parseInt(processNumber, 10);
}



console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


/*

12345 1 -> 12345
12345 2 -> 12354
12345 3 -> 12453



_7_35291  -> 1st
3_5_2917  -> 2nd
32_9_175  -> 3rd
321_7_59  -> 4th
3215_9_7  -> 5th
321579   





*/