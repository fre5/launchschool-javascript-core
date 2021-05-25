const rlSync = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function createPlayer() {
  return {
    move: null,
    score: 0,
    history: {},
  };
}

function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    choose(array) {
      let randomIndex = Math.floor(Math.random() * array.length);
      this.move = array[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log('Choose your move \n(r)ock, (p)aper, sc(i)ssors, (l)izard, or sp(o)ck: ');
        choice = rlSync.question().toLowerCase();
        if (CHOICES.includes(shortenedChoice(choice))) break;
        console.log('Invalid choice, try again.');
      }
      console.clear();
      this.move = shortenedChoice(choice);
    },
  };
  return Object.assign(playerObject, humanObject);
}

function shortenedChoice(string) {
  let result = '';
  if (string.length > 1) {
    return string;
  } else {
    switch (string) {
      case 'r' : result = 'rock';
        break;
      case 'p' : result = 'paper';
        break;
      case 'i' : result = 'scissors';
        break;
      case 'l' : result = 'lizard';
        break;
      case 'o' : result = 'spock';
        break;
    }
  }
  return result;
}

const RPSGame = {
  /*a scoring system where a winning choice
  gets 1 point, losing / draw gets 0 point*/
  SCORING: {
    rock: { scissors: 1, lizard: 1, paper: 0, spock: 0, rock: 0 },
    paper: { rock: 1, spock: 1, scissors: 0, lizard: 0, paper: 0 },
    scissors: { paper: 1, lizard: 1, rock: 0, spock: 0, scissors: 0 },
    lizard: { spock: 1, paper: 1, rock: 0, scissors: 0, lizard: 0 },
    spock: { rock: 1, scissors: 1, lizard: 0, paper: 0, spock: 0 }
  },
  human: createHuman(),
  userName: '',
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log("======================================================");
    console.log("|                                                    |");
    console.log("|  Welcome to Rock, Paper, Scissors, Lizard, Spock!  |");
    console.log("|                                                    |");
    console.log("======================================================");
    console.log("                    Best of 5 wins\n");
  },
  customName() {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    this.userName = rlSync.question("Please enter your name (leave blank for 'Player'): ");
    while (this.userName.split("").some(element => !ALPHABET.includes(element))) {
      this.userName = rlSync.question('Please enter a valid name: ');
    }

    if (this.userName === "") {
      this.userName = "Player";
    }

    this.userName = this.userName[0].toUpperCase() + this.userName.slice(1);
  },
  displayGoodbyeMessage() {
    console.log("======================================================");
    console.log("|                                                    |");
    console.log("|               Thank you for playing!               |");
    console.log("|                                                    |");
    console.log("======================================================");
  },
  resetScores() {
    this.human.score = 0;
    this.computer.score = 0;
  },
  displayHands(humanPoint, computerPoint) {
    console.log(`${this.userName} chose: ${this.human.move}`);
    console.log(`Computer chose: ${this.computer.move}\n`);
    if (humanPoint) {
      console.log(`${this.human.move.toUpperCase()} BEATS ${this.computer.move.toUpperCase()}\n`);
    } else if (computerPoint) {
      console.log(`${this.computer.move.toUpperCase()} BEATS ${this.human.move.toUpperCase()}\n`);
    }
  },
  displayScores() {
    console.log(`${this.userName} score - ${this.human.score}`);
    console.log(`Computer score - ${this.computer.score}\n`);
  },
  displayWinner() {
    if (this.human.score === 5) {
      console.log(`${this.userName} WINS!`);
    } else if (this.computer.score === 5) {
      console.log('Computer WINS!');
    }
  },
  history() {
    let humanHistory = this.human.history;
    let humanHistoryPercent = {};
    let humanHistoryTotal = Object.values(humanHistory)
      .reduce((acc, ele) => acc + ele, 0);

    Object.keys(humanHistory).forEach(element => {
      humanHistoryPercent[element] =
      (humanHistory[element] / humanHistoryTotal) * 100;
    });
    return humanHistoryPercent;
  },
  frequentChoice(array, object) {
    return array.slice().some(element => object[element] > 60 &&
      object[element] !== 100);
  },
  computerAdjChoose(object) {
    let adjChoices = [];
    if (this.frequentChoice(CHOICES, object)) {
      adjChoices = CHOICES.slice().filter(element =>
        object[element] < 60 || object[element] === undefined);

      adjChoices = adjChoices.concat(CHOICES);
      this.computer.choose(adjChoices);
    } else {
      this.computer.choose(CHOICES);
    }
  },
  playerMoves() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let humanPoint = this.SCORING[humanMove][computerMove];
    let computerPoint = this.SCORING[computerMove][humanMove];

    this.displayHands(humanPoint, computerPoint);

    if (humanMove === computerMove) {
      console.log("IT'S A TIE\n");
    } else {
      this.human.score += humanPoint;
      this.computer.score += computerPoint;
    }

    if (humanPoint === 1) {
      this.human.history[humanMove] = this.human.history[humanMove] + 1 || 1;
    } else if (computerPoint === 1) {
      this.computer.history[computerMove] =
      this.computer.history[computerMove] + 1 || 1;
    }
    this.displayScores();
  },
  answerValidator(ask) {
    let answer = rlSync.question(ask);
    answer = answer[0].toLowerCase();
    while (!'YyNn'.includes(answer)) {
      answer = rlSync.question('Please enter a valid answer (y/n) ');
    }
    answer = answer[0].toLowerCase();
    return answer;
  },
  replay() {
    let answer = this.answerValidator('Play again? (y/n) ');
    console.clear();
    return answer[0] === 'y' || answer[0] === 'Y';
  },
  play() {
    console.clear();
    this.displayWelcomeMessage();
    this.customName();
    console.clear();
    while (true) {
      this.human.choose();
      this.computerAdjChoose(this.history());
      this.playerMoves();
      if (this.human.score === 5 || this.computer.score === 5) {
        this.displayWinner();
        if (!this.replay()) {
          break;
        } else {
          this.resetScores();
        }
      }
    }
    this.displayGoodbyeMessage();
  },
};
RPSGame.play();