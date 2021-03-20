logInBox('To boldly go where no one has gone before.');

//+--------------------------------------------+
//|                                            |
//| To boldly go where no one has gone before. |
//|                                            |
//+--------------------------------------------+

function logInBox(string) {
  for (let index = 0; index < 5; index += 1) {
    if (index === 0 || index === 4 ) {
      console.log(`+${'+'.padStart(string.length + 3, '-')}`);
    } else if (index === 1 || index === 3) {
      console.log(`|${'|'.padStart(string.length + 3, ' ')}`);
    } else {
      console.log(`| ${string} |`);
    }
  }  
}

logInBox('');