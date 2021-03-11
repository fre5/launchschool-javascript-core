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

function signedIntegerToString(integer) {
  if (integer === 0) {
    return integerToString(integer);
  } else {
    if (integer > 0) {
      return '+' + integerToString(integer);
    } else if (integer < 0) {
      return '-' + integerToString(-integer);
    }
  }
}


//using Math.sign()

function signedIntegerToStringMathSign(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case 1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

