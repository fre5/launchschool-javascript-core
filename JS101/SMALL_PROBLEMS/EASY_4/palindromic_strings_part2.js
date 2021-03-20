function isRealPalindrome(string) {
  let newString = string.toLowerCase().split('').filter(char => {
    return isNumber(char) || isLetter(char);
  }).join('');
  return newString.toLowerCase() === newString.toLowerCase().split('').reverse().join('');
}

function isNumber(char) {
  return char >= 'a' && char <= 'z';
}

function isLetter(char) {
  return char >= '0' && char <= '9';
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false