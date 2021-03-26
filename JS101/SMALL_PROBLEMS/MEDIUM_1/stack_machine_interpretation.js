function minilang(string) {
  let stack = [];
  let register = 0;
  let array = string.split(' ');
  array = array.map(element => isNaN(Number(element)) ? element : Number(element));

    for (let index = 0; index < array.length; index += 1) {
      switch (array[index]) {
        case 'PRINT' :
          console.log(register);
          break;
        case 'PUSH' :
          stack.push(register);
          break;
        case 'POP' :
          register = stack.pop();
          break;
        case 'ADD' :
          register = register + stack.pop();
          break;
        case 'SUB' :
          register = register - stack.pop();
          break;
        case 'MULT' :
          register = register * stack.pop();
          break;
        case 'DIV' :
          register = parseInt(register / stack.pop(), 10);
          break;
        case 'MOD' :
          register = parseInt(register % stack.pop(), 10);
          break;
        default :
          isNaN(array[index]) ? console.log('Error') : register = array[index];  
      }
    }
  return;
}

/*
Problem : Write a function that implements a stack and register based program
Input : String
Ouput : Integer of calculated value based in the order of the stack
Rules : 
  - n place a value in the register, it doesn't modify the stack
  - PUSH :adds the value to the register
  - ADD :pop a value from the stack and add it to the register, storing the result in the register.
  - SUB :pop a value from the stack and substract it to the register, storing the result in the register.
  - MULT : pop a value from the stack and multiply it to the register, storing the result in the register.
  - DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
  - MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
  - POP : Remove the topmost item from the stack and place it in the register.
  - PRINT : Print the register value.
Data structure & Algorithm:
  - n is the result. declare and initialize variable result and assign it to the value of integer 0.
  - Declare and initialized a variable named stack and assign it with a value of an empty array.
  - Declare and initialized a variable named register and assign it an integer with a value of 0. 
  - Declare and initialize a variable named array and assign it the input argument string with a split method with an argument of 1 whitespace ' '.
  - Reassign the variable array to the same array with a map method where each element is evaluated as a number or a string using isNaN(Number(element)).
  - Use a for loop which index starts from 0, and will keep iterating each array element as long index is less than the length of the array, and every iteration index will increment by 1.
  - Inside the for loop, use a switch case that evaluates and compare the value of each array element to the specified strings above.


*/

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PULSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)
