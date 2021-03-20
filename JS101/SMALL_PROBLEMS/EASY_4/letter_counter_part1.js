console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes(string) {
  let wordsArray = string.split(' ');
  let wordsLengthObj = {};

  wordsArray.forEach(element => {
    let wordLength = element.length;
    wordsLengthObj[wordLength] = wordsLengthObj[wordLength] + 1 || 1; 
  })
  return wordsLengthObj;
}