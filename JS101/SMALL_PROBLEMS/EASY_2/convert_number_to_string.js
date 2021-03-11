function integerToString(integer) {
  const STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let stringBuilder = '';
  do {
    let remainder = integer % 10;
    stringBuilder = stringBuilder.concat(STRING[remainder]);
    integer = (integer - remainder) / 10
  } while(integer > 0);
  return stringBuilder.split('').reverse().join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log((integerToString(1234567890)));      // "1234567890"