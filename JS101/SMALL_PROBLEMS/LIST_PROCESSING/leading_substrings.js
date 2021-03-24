function leadingSubstrings(string) {
  let result = [];

  for (let index = 0; index < string.length; index += 1) {
    result.push(string.substr(0, index + 1));
  }
  return result;

}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


function leadingSubstringsArray(string) {
  let array = string.split('');
  let subarray = [];
  return array.map(element => {
    subarray.push(element);
    return subarray.join('');
  });
}

console.log(leadingSubstringsArray('123'));      // ["a", "ab", "abc"]
console.log(leadingSubstringsArray('a'));        // ["a"]
console.log(leadingSubstringsArray('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


