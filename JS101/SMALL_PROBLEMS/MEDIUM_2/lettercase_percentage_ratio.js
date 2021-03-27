
function letterPercentages(string) {
  const STRING_LENGTH = string.length;
  let characterStat = {};
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  string.split('').forEach(element => {
    if (isAlphabet(element)) {
      if (element === element.toLowerCase()) {
        lowercase += 1;
      } else if (element === element.toUpperCase()) {
        uppercase += 1;
      }
    } else {
      neither += 1;
    }
  });

  characterStat['lowercase'] = calcPercentage(lowercase, STRING_LENGTH)
  characterStat['uppercase'] = calcPercentage(lowercase, STRING_LENGTH)
  characterStat['neither'] = calcPercentage(lowercase, STRING_LENGTH)
  return characterStat;
}

function isAlphabet(string) {
  return ((string >= 'a' && string <= 'z') || (string >= 'A' && string <= 'Z'));
}

function calcPercentage(nominator, STRING_LENGTH) {
  return ((nominator / STRING_LENGTH) * 100).toFixed(2);
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


