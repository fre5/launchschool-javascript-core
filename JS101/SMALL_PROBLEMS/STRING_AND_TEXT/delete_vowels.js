function removeVowels(array) {
  const VOWELS = 'aiueo';
  return array.map(element => {
    return element.split('').filter(subelement => !VOWELS.includes(subelement.toLowerCase())).join('');
  });
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]