//A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);      // will print one is: ["one"]
console.log(`two is: ${two}`);      // will print two is: ["two"]
console.log(`three is: ${three}`);  // will print three is: ["three"]

//because the function parameters shadowed the global variables, they are not changed.

//B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];          // will print one is: ["one"]         
let two = ["two"];          // will print two is: ["two"]
let three = ["three"];      // will print three is: ["three"]

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//B is also the same, function parameters shadowed the global variables.

//C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//splice method mutates the original array where passed in the function, pass by reference

