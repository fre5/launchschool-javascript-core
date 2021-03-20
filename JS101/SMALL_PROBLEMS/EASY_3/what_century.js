century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

function century(year) {
  let number = Math.ceil(year / 100);
  let secondFromLast = number.toString().slice(-2, -1);
  let lastNumber = number.toString().slice(-1);

  if (secondFromLast === '1' || lastNumber === '0') {
    console.log(`${number}th`);
  } else if (lastNumber === '1') {
    console.log(`${number}st`);
  } else if (lastNumber === '2') {
    console.log(`${number}nd`);
  } else if (lastNumber === '3') {
    console.log(`${number}rd`);
  }
}