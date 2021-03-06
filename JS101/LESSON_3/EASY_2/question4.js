let famousWords = "seven years ago...";

let famousWords2 = "Four score and " + famousWords;

console.log(famousWords2);

//or

let famousWords3 = `Four score and ${famousWords}`;

console.log(famousWords3);

//or 

let famousWords4 = "Four score and ".concat(famousWords);

console.log(famousWords4);