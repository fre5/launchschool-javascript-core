// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;               //the program stops here
  counter += 1;
}