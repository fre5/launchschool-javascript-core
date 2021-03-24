function doubleConsonants(string) {
  const VOWELS = 'aeiou';
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz1234567890';
  return string.split('').map(char => {
    if (!VOWELS.includes(char) && ALPHABET.includes(char)) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""