function leadingSubstrings(string) {
  let result = [];
  for (let index = 0; index < string.length; index += 1) {
    result.push(string.slice(0, index + 1));
  }
  return result;
}

function substrings(string) {
  let array = [];

  for (let index = 0; index < string.length; index += 1) {
    let newstring = string.slice(index, string.length);
    array.push(leadingSubstrings(newstring));
  }
  return array.flat();
}

function palindromes(string) {
  return substrings(string).filter(element => {
    return element.split('').reverse().join('') === element && element.length >= 2;
  })
}





console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]