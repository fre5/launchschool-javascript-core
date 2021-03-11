/*
function xor(value1, value2) {
  if ((value1 && !value2) || (!value1 && value2)){
    return true;
  }
  return false;
}
*/

function xor(value1, value2) {
  return !!(Boolean(value1) ^ Boolean(value2));
}

//Xor
// T T - F
// T F - T
// F T - T
// F F - F


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
console.log(xor(false, false) === false);


function xand(val1, val2) {
  return !((val1 && !val2) || (!val1 && val2))
}



//Xand
// T T - T
// T F - F
// F T - F
// F F - T


console.log(xand(5, 0) === false);
console.log(xand(false, true) === false);
console.log(xand(1, 1) === true);
console.log(xand(true, true) === true);
console.log(xand(false, false) === true);

