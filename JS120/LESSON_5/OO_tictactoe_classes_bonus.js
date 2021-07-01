let rlSync = require('readline-sync');

class Square {
  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "0";

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[counter] = new Square();
    }
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  joinOr(array, delimiter, word = "or ") {
    array = array.map((num, index) => {
      if (array.length > 1 && index === array.length - 1) {
        return word + num;
      } else {
        return num;
      }
    });
    return array.join(delimiter);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });
    return markers.length;
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score += 1;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = null;
    this.secondPlayer = null;
  }

  displayWelcomeMessage() {
    console.log("Welcome to TIC TAC TOE!");
    this.board.display();
    this.selectPlayerMoveFirst();
  }

  displayGoodbyeMessage() {
    console.log("");
    console.log("Thank you for playing, Goodbye!");
    console.log("");
  }

  selectPlayerMoveFirst() {
    while (true) {
      let answer = rlSync.question('Who goes first? 1-Player, 2-Computer: ');

      if (answer === '1') {
        this.firstPlayer = this.human;
        this.secondPlayer = this.computer;
      } else if (answer === '2') {
        this.firstPlayer = this.computer;
        this.secondPlayer = this.human;
      }

      if (answer === '1' || answer === '2') {
        this.clearWithSpace();
        break;
      }
    }
  }

  switchPlayerMoveFirst() {
    if (this.firstPlayer === this.human) {
      this.firstPlayer = this.computer;
      this.secondPlayer = this.human;
    } else if (this.firstPlayer === this.computer) {
      this.firstPlayer = this.human;
      this.secondPlayer = this.computer;
    }
  }

  clearWithSpace() {
    console.clear();
    console.log("");
  }

  displayResults() {
    this.clearWithSpace();
    this.board.display();

    if (this.isWinner(this.human)) {
      this.human.incrementScore();
      console.log("Player wins the round!");
    } else if (this.isWinner(this.computer)) {
      this.computer.incrementScore();
      console.log("Computer wins the round!");
    } else {
      console.log("A tie game. How boring.");
    }
    this.displayScores();
  }

  displayScores() {
    console.log(`Human score    : ${this.human.getScore()}`);
    console.log(`Computer score : ${this.computer.getScore()}`);

    if (this.playerHasWon()) {
      this.displayWinner();
      return;
    }

    while (true) {
      rlSync.question("Press any key to continue");
      break;
    }
    this.clearWithSpace();
  }

  play() {
    console.clear();
    this.displayWelcomeMessage();

    while (true) {
      this.playOneGame();
      if (this.playerHasWon()) break;
    }
    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.board.reset();
    this.board.display();

    let currentPlayer = this.firstPlayer;
    while (true) {

      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;

      this.clearWithSpace();
      this.board.display();
      currentPlayer = this.togglePlayer(currentPlayer);
    }
    this.switchPlayerMoveFirst();
    this.displayResults();
  }

  playerHasWon() {
    return this.human.score === TTTGame.WINNING_SCORE ||
           this.computer.score === TTTGame.WINNING_SCORE;
  }

  displayWinner() {
    if (this.human.getScore() === TTTGame.WINNING_SCORE) {
      console.log("Player wins the game! Congratulations!");
    } else if (this.computer.getScore() === TTTGame.WINNING_SCORE) {
      console.log("Computer wins the game! Better luck next time.");
    }
  }

  playerMoves(player) {
    if (player === this.human) {
      this.humanMoves();
    } else if (player === this.computer) {
      this.computerMoves();
    }
  }

  togglePlayer(player) {
    let output;
    if (player === this.firstPlayer) {
      output = this.secondPlayer;
    } else if (player === this.secondPlayer) {
      output = this.firstPlayer;
    }
    return output;
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      choice = rlSync.question(`Choose a square (${this.board.joinOr(validChoices, ", ")}): `);

      if (validChoices.includes(choice)) break;
      console.log("Sorry, that's not a valid choice. \n");
    }

    this.board.markSquareAt(choice, Square.HUMAN_MARKER);
  }

  computerMoves() {
    let choice;
    let validChoices = this.board.unusedSquares();
    let offenseMove = this.computerAction(validChoices, this.human);
    let defenseMove = this.computerAction(validChoices, this.computer);

    if (offenseMove.length > 0) {
      choice = offenseMove[0].filter(key =>
        validChoices.includes(key)).toString();
    } else if (defenseMove.length > 0) {
      choice = defenseMove[0].filter(key =>
        validChoices.includes(key)).toString();
    } else if (validChoices.includes('5')) {
      choice = '5';
    } else {
      do {
        choice = validChoices[this.generateRandomNum(validChoices.length)];
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, Square.COMPUTER_MARKER);
  }

  computerAction(validChoices, player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.filter(row => {
      return this.board.countMarkersFor(player, row) === 2 &&
        row.some(key => validChoices.includes(key));
    });
  }

  generateRandomNum(range) {
    return Math.floor((Math.random() * range) + 1);
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(this.human, row) === 3 ||
             this.board.countMarkersFor(this.computer, row) === 3;
    });
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}

TTTGame.WINNING_SCORE = 3;
TTTGame.POSSIBLE_WINNING_ROWS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"]
];

let game = new TTTGame();
game.play();

