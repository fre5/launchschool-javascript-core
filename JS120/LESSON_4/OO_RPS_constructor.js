let readline = require('readline-sync');

function CreatePlayer() {
  this.move = null;
  this.choices = ['rock', 'paper', 'scissors'];
}

function CreateComputer() {
  CreatePlayer.call(this);

  this.choose = function() {
    let randomIndex = Math.floor(Math.random() * this.choices.length);
    this.move = this.choices[randomIndex];
  }
}

function CreateHuman() {
  CreatePlayer.call(this);

  this.choose = function() {
    while (true) {
      this.move = readline.question('Please choose rock, paper, or scissors: ');
      if (this.choices.includes(this.move)) break;
      console.log('Sorry, invalid choice.');
    }
  }
}

function RPSGame() {
  this.human = new CreateHuman();
  this.computer = new CreateComputer();

  this.displayWelcomeMessage = function() {
    console.log('Welcome to Rock, Paper, Scissors!');
  };

  this.displayGoodByeMessage = function() {
    console.log('Thanks for playing Rock, Paper, Scissors');
  };

  this.displayWinner = function() {
    
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
    this.humanMove = this.human.move;
    this.computerMove = this.computer.move;

    if ((this.humanMove === 'rock' && this.computerMove === 'scissors') ||
        (this.humanMove === 'paper' && this.computerMove === 'rock') ||
        (this.humanMove === 'scissors' && this.computerMove === 'paper')) {
          console.log('You win!');
    } else if ((this.humanMove === 'rock' && this.computerMove === 'paper') ||
               (this.humanMove === 'paper' && this.computerMove === 'scissors') ||
               (this.humanMove === 'scissors' && this.computerMove === 'rock')) {
      console.log('Computer win!');
    } else {
      console.log("It's a tie");
    } 
  };

  this.playAgain = function() {
    this.answer = readline.question('Would you like to play again? (y/n)');
    return this.answer.toLowerCase()[0] === 'y';
  }

  this.play = function() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodByeMessage();
  } 
}

let rpsGame = new RPSGame();

console.log(rpsGame.play());