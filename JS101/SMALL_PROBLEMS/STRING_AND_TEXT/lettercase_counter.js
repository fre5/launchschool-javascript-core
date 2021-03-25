function letterCaseCount(string) {
  let object = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  string.split('').forEach(element => {
    if (element === element.toUpperCase() && ALPHABET.split('').includes(element)) {
      object['uppercase'] += 1;
    } else if (element === element.toLowerCase() && ALPHABET.split('').includes(element)) {
      object['lowercase'] += 1;
    } else {
      object['neither'] += 1;
    }
  });
  return object;
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }