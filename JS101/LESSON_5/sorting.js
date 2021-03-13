[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

// a is 11 and b is 9
// a is 2 and b is 9
// a is 11 and b is 4
// a is 9 and b is 4
// a is 2 and b is 4
// a is 11 and b is 107
// a is 107 and b is 21
// a is 11 and b is 21
// a is 107 and b is 1
// a is 21 and b is 1
// a is 11 and b is 1
// a is 9 and b is 1
// a is 4 and b is 1
// a is 2 and b is 1
// => [ 1, 2, 4, 9, 11, 21, 107 ]

//sort by the order of its length
let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a,b) => a.length - b.length);

console.log(words);