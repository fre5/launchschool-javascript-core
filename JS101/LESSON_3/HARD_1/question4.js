function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length < 4 || dotSeparatedWords.length > 4) {   //added conditional to validate if the length of the array is 4
    return false;
  } else {
    while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false; //return false when the string number is not a number or it is more than 255
      }
    }
    return true;
  }
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}