let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let regex = /t/g;

console.log(statement1.match(regex) === null ? [].length : statement1.match(regex).length);
console.log(statement2.match(regex) === null ? [].length: statement2.match(regex).length);



//or using split and filter
console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);