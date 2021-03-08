//global scope
let answer = 42;

function messWithIt(someNumber) {
  //local scope only modifies the parameter
  return (someNumber += 8);
}

//global scope of a new variable
let newAnswer = messWithIt(answer);

//global scope not affected by local scope
console.log(answer - 8);

//