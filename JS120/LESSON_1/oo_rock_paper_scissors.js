const rlSync = require('readline-sync');

/*
Textual description:
Rock Paper Scissors is a two player game where each player chooses
one of three possible moves : rock, paper, or scissors.
The winner is chosen by comparing their moves:
- Rock crushes scissors
- Scissors cuts paper
- Paper wraps rock
- If both players chose the same move, it's a tie

Extracted:
- Nouns: player, move, rule
- Verbs: choose, compare

Player
- choose

Move
Rule
*/

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    CHOICES: ['rock', 'paper', 'scissors'],
    choose() {
      let randomIndex = Math.floor(Math.random() * this.CHOICES.length);
      this.move = this.CHOICES[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    CHOICES: ['rock', 'paper', 'scissors'],
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors: ');
        choice = rlSync.question();
        if (this.CHOICES.includes(choice)) break;
        console.log('Invalid choice, try again.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    move: null,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("=================================");
  },

  displayGoodbyeMessage() {
    console.log("=====Thank you for playing!======");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`Player chose: ${this.human.move}`);
    console.log(`Computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('Player wins!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }

  },

  playAgain() {
    console.log('Play again? (y/n)');
    let answer = rlSync.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();