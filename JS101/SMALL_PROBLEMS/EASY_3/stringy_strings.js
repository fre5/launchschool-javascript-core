stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

function stringy(number) {
  let string = '';
  for (let index = 0; index < number; index += 1) {
    let number = ((index % 2) === 0) ? 1 : 0;
    string += number;
  }
  console.log(string);
}
