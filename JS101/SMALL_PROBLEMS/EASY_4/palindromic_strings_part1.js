function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

console.log(isPalindrome('madam'));