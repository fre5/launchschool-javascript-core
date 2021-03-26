function wordToDigit(string) {
  let WORD_CONVERT = {
    'zero'  : 0,
    'one'   : 1,
    'two'   : 2,
    'three' : 3,
    'four'  : 4,
    'five'  : 5,
    'six'   : 6,
    'seven' : 7,
    'eight' : 8,
    'nine'  : 9
  }

  return string.split('.').map(element => {
    return element.split(' ').map(subelement => {
      if (Object.keys(WORD_CONVERT).includes(subelement)) {
        return WORD_CONVERT[subelement];
      } else {
        return subelement;
      }
    }).join(' ');
  }).join('.');

}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/*


five five five one two three four.




*/