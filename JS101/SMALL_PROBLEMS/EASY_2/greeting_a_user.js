const rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
name[name.length-1] === '!' ? 
console.log(`HELLO ${name.slice(0,name.length-1).toUpperCase()}. WHY ARE WE SCREAMING?`) : 
console.log(`Hello ${name}.`);