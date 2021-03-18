const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
const WINNING_LINES = [[1,2,3],
  [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
const CORNER_SQUARES = ['1', '3', '7', '9'];
const ALMOST_LINE = {
  1: [[2,3], [4,7], [5,9]], 2: [[1,3], [5,8]],
  3: [[1,2], [6,9], [5,7]], 4: [[5,6], [1,7]],
  5: [[4,6], [2,8], [1,9], [3,7]], 6: [[4,5], [3,9]],
  7: [[8,9], [1,4], [3,5]], 8: [[7,9], [2,5]],
  9: [[7,8], [3,6], [1,5]]
};

function prompt(string) {
  console.log(string);
}

function displayBoard(board) {
  console.clear();
  let inc = 0;
  prompt(`\n   TIC TAC TOE\n`);
  prompt(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}\n`);
  prompt('     |     |');
  prompt(`  ${board[String(++inc)]}  |  ${board[String(++inc)]}  |  ${board[String(++inc)]}`);
  prompt('     |     |');
  prompt('-----+-----+-----');
  prompt('     |     |');
  prompt(`  ${board[String(++inc)]}  |  ${board[String(++inc)]}  |  ${board[String(++inc)]}`);
  prompt('     |     |');
  prompt('-----+-----+-----');
  prompt('     |     |');
  prompt(`  ${board[String(++inc)]}  |  ${board[String(++inc)]}  |  ${board[String(++inc)]}`);
  prompt('     |     |\n');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function getSquares(board, mark) {
  return Object.keys(board).filter(key => board[key] === mark);
}

function joinOr(arr, separator = ', ', joinWord = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${joinWord} `);
    default:
      return arr.slice(0, arr.length - 1).join(separator) + `${separator}${joinWord} ${arr[arr.length - 1]}`;
  }
}

function playerChoosesSquare(board) {
  let square = '';

  while (true) {
    prompt(`Choose a square ${joinOr(getSquares(board, INITIAL_MARKER))}`);
    square = rlSync.question().trim();
    if (getSquares(board, INITIAL_MARKER).includes(square) &&
        !isNaN(parseInt(square, 10))) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = PLAYER_MARKER;

}

function computerChoosesSquare(board) {

  if (offensivePlay(board)) {
    board[offensivePlay(board)] = COMPUTER_MARKER;

  } else if (findAlmostLine(board, PLAYER_MARKER)) {
    board[findAlmostLine(board, PLAYER_MARKER)] = COMPUTER_MARKER;

  } else if (board['5'] === INITIAL_MARKER) {
    board['5'] = COMPUTER_MARKER;

  } else {
    let randomIndex = Math.floor(Math.random() *
      getSquares(board, INITIAL_MARKER).length);
    let square = getSquares(board, INITIAL_MARKER)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function findCombination(choices) {
  let squareCombinations = [];
  //Create all combination of selected choices.
  for (let index = 0; index < choices.length; index++) {
    for (let subindex = index + 1; subindex < choices.length; subindex++) {
      squareCombinations.push([choices[index], choices[subindex]]);
    }
  }
  return squareCombinations;
}

function findAlmostLine(board, marker) {
  //Create an array of keys with a selected marker.
  let choices = getSquares(board, marker);

  if (choices.length > 1) {

    let completeOrBlockArray = []; //Collect all keys to block or complete almost win lines.
    //Iterate through array of player combination sub arrays.
    for (let index = 0; index < findCombination(choices).length; index++) {
      let sq1 = findCombination(choices)[index][0];
      let sq2 = findCombination(choices)[index][1];
      //Filter out each array element of sub arrays.
      completeOrBlockArray.push(parseInt(Object.keys(ALMOST_LINE)
        .filter(key => ALMOST_LINE[key]
          .some(arr => arr[0] === parseInt(sq1, 10) &&
            arr[1] === parseInt(sq2, 10))), 10));
    }

    //Create an array of blocking or completing key from available squares.
    let completeOrBlock = completeOrBlockArray
      .filter(num => getSquares(board, INITIAL_MARKER).includes(String(num)));
    return completeOrBlock[0]; //Take the first option.
  } else {
    return null;
  }
}

function sortObj(obj) {
  return Object.entries(obj).sort((a, b) => b[1] - a[1]);
}

function checkCorners(board) {
  let noCorners = possibleWinLines(board, getSquares(board, PLAYER_MARKER))
    .filter(num => !CORNER_SQUARES.includes(num[0]));
  return noCorners.map(num =>
    num[0])[Math.floor(Math.random() * noCorners.length)];
}

function possibleWinLines(board, playerMark) {
  //Check for available winning lines.
  let possibleLines = WINNING_LINES
    .filter(num => !num.includes(playerMark[0])).flat();

  //Filter available empty squares.
  possibleLines = possibleLines.filter(num => {
    return getSquares(board, INITIAL_MARKER).includes(String(num));
  });

  //Create an object of all possible winning lines.
  let possibleLinesObj = {};
  for (let index = 0; index < possibleLines.length; index++) {
    possibleLinesObj[possibleLines[index]] =
      possibleLinesObj[possibleLines[index]] + 1 || 1;
  }

  return sortObj(possibleLinesObj);
}

function offensivePlay(board) {
  //Create arrays of available squares and player squares.
  let playerMark = getSquares(board, PLAYER_MARKER);

  //Check the first 2 moves.
  if ((playerMark.length <= 2 && getSquares(board, INITIAL_MARKER)
    .length >= 6 ) && !findAlmostLine(board,PLAYER_MARKER)) {

    //Anticipate players from playing corners.
    if ((playerMark.includes('1') && playerMark.includes('9')) ||
        (playerMark.includes('3') && playerMark.includes('7'))) {
      return checkCorners(board);
    }

    //Return the most frequent square.
    return possibleWinLines(board, playerMark)[0][0];

    //Aim to win by checking for almost complete line and complete it.
  } else if (findAlmostLine(board, COMPUTER_MARKER)) {
    return findAlmostLine(board, COMPUTER_MARKER);
  }
  return null;
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++ ) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if ( board[sq1] === PLAYER_MARKER &&
         board[sq2] === PLAYER_MARKER &&
         board[sq3] === PLAYER_MARKER
    ) {
      return 'Player';
    } else if ( board[sq1] === COMPUTER_MARKER &&
                board[sq2] === COMPUTER_MARKER &&
                board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return getSquares(board, INITIAL_MARKER).length === 0;
}

function chooseSquare(board, currentPlayer) {
  return currentPlayer === '1' ? playerChoosesSquare(board) : computerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === '1' ? '2' : '1';
}


while (true) {

  let playerScore = 0;
  let computerScore = 0;
  let currentPlayer = '';
  let firstMove = '';

  while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {

    let board = initializeBoard();

    while (true) {

      displayBoard(board);

      while (currentPlayer !== '1' && currentPlayer !== '2') {
        currentPlayer = rlSync.question('Who goes first?(1.Player/2.Computer)');
        firstMove = currentPlayer; //Saves who makes the first move.
      }

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);
    if (someoneWon(board)) {

      prompt(`${detectWinner(board)} won!`);

      if (detectWinner(board) === 'Player') {
        playerScore++;
      } else if (detectWinner(board) === 'Computer') {
        computerScore++;
      }
    } else {
      prompt("It's a tie!");
    }

    prompt(`Player score: ${playerScore}`);
    prompt(`Computer score: ${computerScore}`);

    if (playerScore === 5 || computerScore === 5) {
      prompt(`Game Over, ${detectWinner(board)} won the game!`);
      break;
    } else {
      rlSync.question('Continue');
      currentPlayer = firstMove;
    }
  }
  prompt('Play again? (y or n)');
  let answer = '';

  while (answer !== 'n' && answer !== 'y') {
    answer = rlSync.question().toLowerCase();
    if (answer !== 'n' && answer !== 'y') {
      prompt('Please enter a valid answer');
    }
  }

  if (answer === 'n') break;
  currentPlayer = '';
  firstMove = '';
}
console.clear();
prompt('Thanks for playing, goodbye! 👋');