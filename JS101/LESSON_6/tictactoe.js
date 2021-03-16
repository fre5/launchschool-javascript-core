const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
console.log('\n   TIC TAC TOE\n');

function prompt(string) {
  console.log(string);
}

function displayBoard(board) {
  //console.clear();
  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);
  let inc = 0;
  console.log('');
  console.log('     |     |');
  console.log(`  ${board[String(++inc)]}  |  ${board[String(++inc)]}  |  ${board[String(++inc)]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[String(++inc)]}  |  ${board[String(++inc)]}  |  ${board[String(++inc)]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[String(++inc)]}  |  ${board[String(++inc)]}  |  ${board[String(++inc)]}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square +=1) {
    board[String(square)] = INITIAL_MARKER;
  }
  
  return board;
} 

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
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

  while(true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}`);
    square = rlSync.question().trim();
    if (emptySquares(board).includes(square) && !isNaN(parseInt(square))) break;
    
    prompt("Sorry, that's not a valid choice.");
    
  }
  
  board[square] = 'X';
  
}

function computerChoosesSquare(board) {

  if(board[findAtRiskSquare(board)]) {
    board[findAtRiskSquare(board)] = COMPUTER_MARKER;

  } else {
    
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
  
}

function findAtRiskSquare(board) {
  const ALMOST_LINE = {
    1: [[2,3], [4,7], [5,9]],
    2: [[1,3], [5,8]],
    3: [[1,2], [6,9], [5,7]],
    4: [[5,6], [1,7]],
    5: [[4,6], [2,8], [1,9], [3,7]],
    6: [[4,5], [3,9]],
    7: [[8,9], [1,4], [3,5]],
    8: [[7,9], [2,5]],
    9: [[7,8], [3,6], [1,5]]
  }                      

  let playerChoices = Object.keys(board).filter(key => board[key] === 'X');  

  if(playerChoices.length > 1) {
    let playerCombinations = []; //collects all combinations of player choices

    //iterate through current player choices
    for(let i = 0; i < playerChoices.length; i++) {
      for(let j = i+1; j < playerChoices.length; j++) {
        playerCombinations.push([playerChoices[i], playerChoices[j]]);
      }
    }

    let lineBlockerArray = []; //collects the keys to block almost win lines

    //iterate through player combination arrays
    for (let index = 0; index < playerCombinations.length; index++) {
      let sq1 = playerCombinations[index][0];
      let sq2 = playerCombinations[index][1];
      //filters out all array elements that match player almost win combinations
      lineBlockerArray.push(parseInt(Object.keys(ALMOST_LINE).filter(key => ALMOST_LINE[key].some(arr => arr[0] === parseInt(sq1) && arr[1] === parseInt(sq2)))));
    }
    
    //console.log(lineBlockerArray);
    //filters out blocking move options by available squares
    
    let lineBlocker = lineBlockerArray.filter(num => emptySquares(board).includes(String(num)));
    //console.log(lineBlocker);
    return lineBlocker[0];
  } else {
    return null;
  }

  
}

function detectWinner(board) {  
  let winningLines = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

  for (let line = 0; line < winningLines.length; line++ ) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

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
  return emptySquares(board).length === 0;
}

while(true) {
  let playerScore = 0;
  let computerScore = 0;

  while(playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    let board = initializeBoard();
    
    while(true) {
      displayBoard(board);
  
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
  
      computerChoosesSquare(board);
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
    if(playerScore === 5 || computerScore === 5) {
      prompt(`Game Over, ${detectWinner(board)} won the game!`);
      break;
    } else {
      rlSync.question('Continue');
    }

  }
  prompt('Play again? (y or n)');
  let answer = rlSync.question().toLowerCase();
  if (answer !== 'y') break;
}

prompt('Thanks for playing, goodbye!');


