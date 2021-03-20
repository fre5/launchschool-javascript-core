console.log(cleanUp("---what's my +*& line?"));

function cleanUp(gibberish) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let cleanedWords = '';
  let spaceCounter = 0;
  gibberish.split('').forEach(char => {
    if (alphabet.split('').includes(char)) {
      cleanedWords += char;
      spaceCounter = 0;
    } else if (spaceCounter === 0) {
      cleanedWords += ' ';
      spaceCounter += 1;
    }
  });
  return cleanedWords;
}