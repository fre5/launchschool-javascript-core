function substring(string) {
  let result = [];
  let length = string.length;
  let counter = 1;

  while (length >= 2) {
    for (let index = 0; index < counter; index += 1) {
      result.push(string.substr(index,length));
    }
    counter += 1;
    length -= 1;
  }
  return result;
}

function isPalindrome(array) {
  let result = [];
  array.forEach(element => {
    element.split('').reverse().join('') === element ? result.push(element) : '';
  })
  return result;
}

function palindromeSubstrings(string) {
  return isPalindrome(substring(string));
}


console.log(palindromeSubstrings(''));







