console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}


function isNumber(char) {
  return char >= 'a' && char <= 'z';
}

function isLetter(char) {
  return char >= '0' && char <= '9';
}

function wordSizes(string) {
  let wordsArray = string.split(' ');
  let wordsLengthObj = {};

  wordsArray.forEach(element => {
    let specialChar = 0;
    let elementLength = element.length;
    element.toLowerCase().split('').forEach(char => {
      if (!isNumber(char) && !isLetter(char)) {
        specialChar += 1;
      }
    });

    wordsLengthObj[elementLength - specialChar] =
    wordsLengthObj[elementLength - specialChar] + 1 || 1; 
  })
  return wordsLengthObj;
}