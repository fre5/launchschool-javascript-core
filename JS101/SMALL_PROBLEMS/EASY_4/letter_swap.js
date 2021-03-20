console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap(string) {
  return string.split(' ').map(char => char.split('').reverse().join('')).join(' ');
}