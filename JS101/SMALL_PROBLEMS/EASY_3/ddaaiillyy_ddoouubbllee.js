function crunch(string) {
  let newString = '';
  let char = '';
  for (let index = 0; index <= string.length; index += 1) {
    if (char !== string[index]) {
      newString += char;
    }
    char = string[index];
  }
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));