function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  let array = str.split('').map(element => DIGITS[element]);
  let value = 0;
  array.forEach(element => {
    value = (10 * value) + element;
  }) 
  return value;
}


function stringToSignedInteger(string) {
  if (!isNaN(string[0])) {
    return stringToInteger(string);
  } else {
    if (string[0] === '-') {
      return -stringToInteger(string.slice(1));
    } else { 
      return stringToInteger(string.slice(1));
    }
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

//with switch case

function stringToSInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1));
    case '+':
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}
