const rlSync = require('readline-sync');

let length = rlSync.question("Enter the length of the room in meters: ");
let width = rlSync.question("Enter the width of the room in meters: ");
console.log(`The are of the room is ${length * width} square meters (${((length * width) * 10.7639).toFixed(2)} square feet)`);
