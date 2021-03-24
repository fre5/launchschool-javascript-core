
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


console.log(substrings('abcde'));

//[
// "a", "ab", "abc", "abcd", "abcde",
// "b", "bc", "bcd", "bcde",
// "c", "cd", "cde",
// "d", "de",
// "e" ]


console.log(substringsArray('abcde'));




function substringsArray(string) {
  let array = string.split('');
  let subarray = [];
  return array.map(element => {
    let findIndex = string.indexOf(element);
    return leadingSubstrings(string.slice(findIndex));
  }).flat();
}

//abcde
//bcde
//cde
//de
//e