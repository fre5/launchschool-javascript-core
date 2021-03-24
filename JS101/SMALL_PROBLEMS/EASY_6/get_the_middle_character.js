function centerOf(string) {
  let index = Math.floor(string.length/2);
  return string.length % 2 !== 0 ? string.substr(index, 1) : string.substr(index-1, 2);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"