console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

function twice(number) {
  let numString = String(number);
  let stringLength = numString.length;
  if (stringLength % 2 === 0) {
    if (numString.substr(0, stringLength/2) === numString.substr(stringLength/2, stringLength/2)) {
      return Number(numString);
    }
  }
  return number * 2;
}