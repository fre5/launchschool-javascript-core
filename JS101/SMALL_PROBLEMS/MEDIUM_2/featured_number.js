function featured(number) {
  
  const MAX_NUMBER = 9876543201;

  let featuredNum = isFeatured(number);

  do {
    if (allUnique(number)) {
      return featuredNum;
    }

    featuredNum += 14;

  } while (featuredNum < MAX_NUMBER);

  return 'There is no possible number that fuilfills those requirements';
}

function isFeatured(number) {
  do {
    number += 1;
  }
  while ((number % 2 === 0) || (number % 7 !== 0));

  return number;
}

function allUnique(number) {
  let obj = {};
  let array = number.toString().split('');

  array.forEach(element => {
    obj[element] = obj[element] + 1 || 1;
  });

  if (Object.values(obj).some(element => element > 1)) {
    return false;
  }
  return true;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35 
  
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

