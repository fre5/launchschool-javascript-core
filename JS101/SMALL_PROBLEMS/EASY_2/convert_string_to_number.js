function stringToInteger(str) {
  return str * 1;
}




console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function digitize(str) {
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

console.log(digitize('5455'));

const HEX = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}

function hexadecimalToInteger(str) {
  return str.split('')
            .reverse()
            .reduce((acc, ele, idx) => acc + (HEX[ele.toUpperCase()] * (16 ** idx)), 0);
}

hexadecimalToInteger('4D9f') === 19871; //true

console.log(hexadecimalToInteger('4D9f'));



