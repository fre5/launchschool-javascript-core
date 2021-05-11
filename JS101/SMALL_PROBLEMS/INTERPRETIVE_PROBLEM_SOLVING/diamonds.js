/*
Given an integer n, write a function that returns a figure of diamond in the console where n is width part of the diamond

Data structure : 
- Input : an integer
- Output : the diamond shaped '*' characters printed in the console


space = _
n 3
1 3 1

n = 5
1 3 5 3 1

_*   -> "_".repeat(1) + "*".repeat(1)
***  -> "_".repeat(0) + "*".repeat(3)
_*   -> "_".repeat(1) + "*".repeat(1)

____*    -> "_".repeat(3) + "*".repeat(1)
___***   -> "_".repeat(2) + "*".repeat(3)
__*****  -> "_".repeat(1) + "*".repeat(5)

_******* -> "_".repeat(0) + "*".repeat(7)

__*****  -> "_".repeat(1) + "*".repeat(5)
___***   -> "_".repeat(2) + "*".repeat(3)
____*    -> "_".repeat(3) + "*".repeat(1)


Algorithm :
- declare a variable spaces, initialize it to the value of n divided by 2, rounded down
- create a for loop that its index starts from 1, loop iterates n times, increment index by 2
  - print a value as follows : string dash repeated spaces times, concatenated with asterisk character repeated index times
  - decrement spaces by 1
- re-assign spaces to 1
- create a for loop that its index stats from n divided by 2 rounded down, n iterates as long as n is bigger than 0; n decrement by 2
  - print to the console : string dash repeated spaces times, concatenated with asterisk character repeated index times
  - increment spaces by 1
- return nothing
*/

function diamond(n) {
  let spaces = Math.floor(n/2);
  for (let index = 1; index <= n; index += 2) {
    console.log(" ".repeat(spaces) + "*".repeat(index));
    spaces -= 1;
  }
  spaces = 1;
  for (let index = n - 2; index > 0; index -= 2) {
    console.log(" ".repeat(spaces) + "*".repeat(index));
    spaces += 1;
  }
  
}

console.log(diamond(73));