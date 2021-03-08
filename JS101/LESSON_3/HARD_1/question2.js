let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

//the last line output will print { first: [1,2] } because numArray is referenced from object