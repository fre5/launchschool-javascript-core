const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

console.log('_____ROCK PAPER SCISSORS LIZARD SPOCK_____');

function askAndGetValue(message) {
  let inputValue = rlSync.question(`=> ${message}`);
  return inputValue;
}

let playerScore = 0;
let computerScore = 0;

function scores(winOrLose) {
  if (winOrLose === 'win') {
    playerScore += 1;
  } else if (winOrLose === 'lose') {
    computerScore += 1;
  }
}

function choiceLogic(computerChoice, winTo1, winTo2, loseTo1, loseTo2) {
  if (computerChoice === winTo1 || computerChoice === winTo2) {
    console.log('You win!');

    scores('win');

  } else if (computerChoice === loseTo1 || computerChoice === loseTo2) {
    console.log('Computer wins!');

    scores('lose');

  } else {
    console.log('It\'s a tie');
  }
}

function displayWinner(choice, computerChoice) {
  console.log(`You chose ${choice}, computer chose ${computerChoice}`);

  switch (choice) {
    case 'rock':
      choiceLogic(computerChoice, 'scissors', 'lizard', 'paper', 'spock');
      break;
    case 'paper':
      choiceLogic(computerChoice, 'rock', 'spock', 'scissors', 'lizard');
      break;
    case 'scissors':
      choiceLogic(computerChoice, 'paper', 'lizard', 'rock', 'spock');
      break;
    case 'lizard':
      choiceLogic(computerChoice, 'spock', 'paper', 'rock', 'scissors');
      break;
    case 'spock':
      choiceLogic(computerChoice, 'scissors', 'rock', 'paper', 'lizard');
      break;
  }
}

function twoS() {
  let selection;
  while (selection !== 'o' && selection !== 'c') {
    selection = askAndGetValue('Type c for scissors and o for spock > ');
  }

  if (selection === 'c') {
    selection = 'scissors';
  } else {
    selection = 'spock';
  }

  return selection;
}

function chooseShortened(string) {
  let selection;
  selection = string;

  if (string.length === 1) {
    if (string === 'r') {
      selection = 'rock';
    } else if (string === 'p') {
      selection = 'paper';
    } else if (string === 's') {
      selection = twoS();
    } else if (string === 'l') {
      selection = 'lizard';
    }
  }

  return selection;
}

let playAgain;  // 'y' or 'n'

do {
  while (true) {
    let choice = askAndGetValue(`Choose one: ${VALID_CHOICES.join(', ')} > `);
    let shortenedChoice = chooseShortened(choice);

    while (!VALID_CHOICES.includes(shortenedChoice)) {
      choice = askAndGetValue('Not a valid choice, please try again > ');
      shortenedChoice = chooseShortened(choice);
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(shortenedChoice, computerChoice);
    if (playerScore === 5 || computerScore === 5) break;
  }

  if (playerScore === 5) {
    console.log('You are the grand winner!');
  } else if (computerScore === 5 ) {
    console.log('Computer is the grand winner!');
  }

  playerScore = 0;   //scores reset
  computerScore = 0; 

  do {
    playAgain = askAndGetValue('Would you like to play again?(y/n) > ').toLocaleLowerCase();
  } while (playAgain[0] !== 'y' && playAgain[0] !== 'n');

} while (playAgain[0] !== 'n');

console.log("Thank you for playing!");