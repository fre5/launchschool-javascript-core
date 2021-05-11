/*
Given a string, write a program that returns a boolean true when a string can be formed by using several boxes
from 13 boxes with pairing alphabets, there can only be a set of alphabet between all the boxes with each boxes 
having a pair of letters

Examples :
- 'BATCH' -> true
- 'BUTCH' -> false
- 'jest'  -> true

Data structure :
- Input : a string
- Output : a boolean

Algorithm :
- re-assign string to its own value uppercased
- declare a constant BOXES, initialize it to the value of all the alphabets with its pairing
- iterate all the characters of the string input
  - declare a variable reg, initialize it to a new regular expression that takes current character globally
  - check if array length from the return value of reg that matches in the string is bigger than 1
    - if yes, return false
  - check if the character iterated used as key to the object return the value of a character that is included in the input string
    - if yes, return false
- if iteration finishes without returning, return true
*/

function isBlockWord(string) {
  string = string.toUpperCase();
  const BOXES = {
    A : 'N',
    B : 'O',
    C : 'P',
    D : 'Q',
    E : 'R',
    F : 'S',
    G : 'T',
    H : 'U',
    I : 'V',
    J : 'W',
    K : 'X',
    L : 'Y',
    N : 'Z',
    O : 'B',
    P : 'C',
    Q : 'D',
    R : 'E',
    S : 'F',
    T : 'G',
    U : 'H',
    V : 'I',
    W : 'J',
    X : 'K',
    Y : 'L',
    Z : 'M'
  }
  for (let index = 0; index < string.length; index += 1) {
    let reg = new RegExp(string[index], "g");
    if (string.match(reg).length > 1) {
      return false;
    }
    if (string.includes(BOXES[string[index]])) {
      return false;
    }
  }
  return true;
}

console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest') === true);       // true
console.log(isBlockWord('floW') === true);       // true
console.log(isBlockWord('APPLE') === false);      // false
console.log(isBlockWord('apple') === false);      // false
console.log(isBlockWord('apPLE') === false);      // false
console.log(isBlockWord('Box') === false);        // false