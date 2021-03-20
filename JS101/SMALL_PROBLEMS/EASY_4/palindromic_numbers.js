function isPalindromicNumber(number) {
  return number.toString().split('').reverse().join('') === number.toString();
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true