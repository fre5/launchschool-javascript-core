//8 - output all the vowels from the sentence
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

console.log(Object.values(obj).flat().join('').split(''));

const VOWELS = 'aiueo'

Object.values(obj)
      .flat()
      .join('')
      .split('')
      .forEach(element => {
        if (VOWELS.includes(element)) {
          console.log(element);
        }
      });