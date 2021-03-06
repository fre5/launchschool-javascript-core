let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino")); //also works with arrays
console.log(str2.includes("Dino"));

//returns array with match string, index, input and groups
console.log(str1.match('Dino') !== null); // false
console.log(str2.match('Dino') !== null); // true

//indexOf will return -1 when it doesn't exist
console.log(str1.indexOf('Dino') > -1); // false
console.log(str2.indexOf('Dino') > -1); // true