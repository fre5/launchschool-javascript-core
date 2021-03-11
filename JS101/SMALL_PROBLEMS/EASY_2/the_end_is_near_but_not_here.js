function penultimate(string) {
  if(string.split(' ').length < 2) {
    console.log('Not enough words');
  } 
  let arr = string.split(' ');
  return arr[arr.length - 2];
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//Problem 
//Create a function that retrieves the middle word of a phrase

//Example
//console.log(middleWord("It's a hard knock life")); output "hard"

//Data structure
//Input: string
//Output: string
//Rules: 
//  - If the string contains two middle words, it will output the last of the two
//  - If the string contains no word or empty, it will output 'Not enough word'

//Algorithm
//  - The string of sentence will have to be split into an array
//  - To select the middle word, the array index has to be half of the array length

//Code
function midSentence(string) {
  if(string.split(' ').length < 2) {
    console.log('Not enough words');
  } 
  let arr = string.split(' ');
  return arr[Math.floor(arr.length / 2)];
}
console.log(midSentence("last word") === "word"); // logs true
console.log(midSentence("It's a hard knock life") === "hard"); // logs true
