let string = "The Flintstones Rock!";
let newString = "";

//using concatenation
for(let index = 0; index < 10; index += 1) {
  newString += " ";
  console.log(newString + string);
}

//using repeat()
for(let padding = 0; padding < 10; padding += 1) {
  console.log(" ".repeat(padding) + string);
}

