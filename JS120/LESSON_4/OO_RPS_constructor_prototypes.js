let readline = require('readline-sync');

function CreatePlayer() {
  this.move = null;
  this.choices = ['rock', 'paper', 'scissors'];
}

function CreateComputer() {
  CreatePlayer.call(this);
}

CreateComputer.prototype.choose = function() {
  this.randomIndex = Math.floor(Math.random() * this.choices.length);
  this.move = this.choices[this.randomIndex];
}

function CreateHuman() {
  CreatePlayer.call(this);
}

CreateHuman.prototype.choose = function() {
  while (true) {
    this.move = readline.question('Please choose rock, paper, or scissors: ');
    if (this.choices.includes(this.move)) break;
    console.log('Sorry, invalid choice');
  }
}

function RPSGame() {
  this.computer = new CreateComputer();
  this.human = new CreateHuman();
}

RPSGame.prototype = {
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },
  displayGoodByeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors');
  },
  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((this.human.move === 'rock' && this.computer.move === 'scissors') ||
        (this.human.move === 'paper' && this.computer.move === 'rock') ||
        (this.human.move === 'scissors' && this.computer.move === 'paper')) {
          console.log('You win!');
    } else if ((this.human.move === 'rock' && this.computer.move === 'paper') ||
               (this.human.move === 'paper' && this.computer.move === 'scissors') ||
               (this.human.move === 'scissors' && this.computer.move === 'rock')) {
      console.log('Computer win!');
    } else {
      console.log("It's a tie");
    } 
  },
  playAgain() {
    this.answer = readline.question('Would you like to play again? (y/n) ');
    return this.answer.toLowerCase()[0] === 'y';
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodByeMessage();
  }
};

RPSGame.prototype.constructor = RPSGame;

let rpsGame = new RPSGame();
rpsGame.play();
