/*
Problem :
given an integer, write a function that displays an 8 pointed star in an n x n grid

Rules : n is always odd

Example : 
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

Data structure :
- Input : integer n
- Output : 8 pointed star printed on the console

- asterisk (a)
- inside spaces (i)
- outside spaces (o)

*__*__*   a - 3, i - 2, o - 0     
_*_*_*    a - 3, i - 1, o - 1
__***     a - 3, i - 0, o - 2
*******   a - n, i - 0, o - 0 
__***     a - 3, i - 0, o - 2 
_*_*_*    a - 3, i - 1, o - 1   
*__*__*   a - 3, i - 2, o - 0

* * *     a - 3, i - 1, o - 0
 ***      a - 3, i - 0, o - 1
*****
 ***
* * * 

Algorithm :
- declare a helper function printout that takes 3 arguments i, and o representing asterisks, inside space, and outside space
  - return the print line consists of x number of i and o

- main function 
  - declare a variable halfN, initialize it to the value of n divided by 2 rounded down
  - create a for loop, index starts from 0, index iterates as long as the value is less and equal to  n divided by 2 rounded down minus 1, index increment by 1
    - decrement halfN by 1
    - print to console : printout that takes halfN as first argument, and index as second argument
  - print to console : asterisk repeated n times
  - re-assign halfN to the value of n divided by 2 rounded down and minus 1
  - create a for loop that index starts from 0, index iterates as long as the value is less and equal to n divided by 2 rounded down minus 1, index increment by 1
    - print to console : printout that takes index as first argument, and index as second argument
    - decrement halfN by 1

*/

function star(n) {
  let halfN = Math.floor(n / 2);
  for (let index = 0; index <= Math.floor(n / 2) - 1; index += 1) {
    halfN -= 1;
    console.log(printout(halfN, index));
  }
  console.log("*".repeat(n));
  halfN = Math.floor(n / 2) - 1;
  for (let index = 0; index <= Math.floor(n / 2) - 1; index += 1) {
    console.log(printout(index, halfN));
    halfN -= 1;
  }
  return;
}

function printout (i, o) {
  return `${" ".repeat(o)}*${" ".repeat(i)}*${" ".repeat(i)}*`;
}

console.log(star(57));
