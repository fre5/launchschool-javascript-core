const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

console.log('_____ROCK PAPER SCISSORS_____');

function askAndGetValue(message) {
  let inputValue = rlSync.question(`=> ${message}`);
  return inputValue;
}

while (true) {
  let choice = askAndGetValue(`Choose one: ${VALID_CHOICES.join(', ')} `);

  while (!VALID_CHOICES.includes(choice)) {
    choice = askAndGetValue('Not a valid choice, please try again ');
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  console.log(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    console.log('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie");
  }

  let playAgain;
  playAgain = askAndGetValue('Would you like to play again?(y/n) ').toLocaleLowerCase();

  while (true) {
    if (playAgain === 'y' || playAgain === 'n') {
      break;
    }
  }
  if (playAgain === 'n') break;
}