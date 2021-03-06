let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let fixCase = (string) => {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

console.log(fixCase(munstersDescription));