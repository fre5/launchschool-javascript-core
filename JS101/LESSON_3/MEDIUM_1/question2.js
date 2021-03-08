let munstersDescription = "The Munsters are creepy and spooky.";

//using for loop and concatenation
let newString = "";
for(let index = 0; index < munstersDescription.length; index += 1) {
  munstersDescription[index] === munstersDescription[index].toLowerCase() ? newString += munstersDescription[index].toUpperCase() : newString += munstersDescription[index].toLowerCase();
}

console.log(newString);

//using split to create an array, map to copy the array and join to rejoin the array back to string
let solution = munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
  
console.log(solution);