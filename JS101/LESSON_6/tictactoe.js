const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
const WINNING_LINES = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function prompt(string) {
  console.log(string);
}

function displayBoard(board) {
  console.log('\n   TIC TAC TOE\n');
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
  
  board[square] = PLAYER_MARKER;
  
}

function computerChoosesSquare(board) {
  
  if (offensivePlay(board)) {
    board[offensivePlay(board)] = COMPUTER_MARKER;

  } else if(findAlmostLine(board, PLAYER_MARKER)) {
    board[findAlmostLine(board, PLAYER_MARKER)] = COMPUTER_MARKER;

  } else if(board['5'] === INITIAL_MARKER){
    board['5'] = COMPUTER_MARKER;

  } else {  
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function findAlmostLine(board, marker) { 
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
  };    

  //Create an array of keys with a selected marker.
  let choices = Object.keys(board).filter(key => board[key] === marker);  

  if(choices.length > 1) {
    let squareCombinations = []; 

    //Create all combination of selected choices.
    for(let i = 0; i < choices.length; i++) {
      for(let j = i+1; j < choices.length; j++) {
        squareCombinations.push([choices[i], choices[j]]);
      }
    }

    let completeOrBlockArray = []; //Collect all keys to block or complete almost win lines.

    //Iterate through array of player combination sub arrays.
    for (let index = 0; index < squareCombinations.length; index++) {
      let sq1 = squareCombinations[index][0];
      let sq2 = squareCombinations[index][1];
      //Filter out each array element of sub arrays that matches player almost win combinations and store it in a new array.
      completeOrBlockArray.push(parseInt(Object.keys(ALMOST_LINE).filter(key => ALMOST_LINE[key].some(arr => arr[0] === parseInt(sq1) && arr[1] === parseInt(sq2)))));
    }
    
    //Create an array of blocking or completing key from available empty squares.
    let completeOrBlock = completeOrBlockArray.filter(num => emptySquares(board).includes(String(num)));
    return completeOrBlock[0]; //Takes the first option.
  } else {
    return null; 
  }
}

function offensivePlay(board) {
  
  //Create an array of available.
  let freeSquares = Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
  let playerMark = Object.keys(board).filter(key => board[key] === PLAYER_MARKER);
  
  //Check for the first move.
  if (playerMark.length === 1 && freeSquares.length === 8) {
    //Check for available winning lines.
    let possibleLines = WINNING_LINES.filter(num => !num.includes(playerMark[0]) && !emptySquares(board).includes(num));

    possibleLines = possibleLines.flat();
    
    //Create an object of all possible winning lines.
    let possibleLinesObj = {};
    for (let i = 0; i < possibleLines.length; i++) {
      possibleLinesObj[possibleLines[i]] = possibleLinesObj[possibleLines[i]] + 1 || 1;
    }

    //Sort the object in order to find a square with the highest win probability.
    let sortedByValue = Object.entries(possibleLinesObj).sort((a, b) => b[1] - a[1]);

    //Take the most frequent square.
    return sortedByValue[0][0];
    
    //Aim to win by checking for almost complete line and complete it.
  } else if (findAlmostLine(board, COMPUTER_MARKER)) {
    return findAlmostLine(board, COMPUTER_MARKER);
    
    //Then always take a corner square while checking for any threats.
  } else if (freeSquares.length > 6 && !findAlmostLine(board, PLAYER_MARKER)) {
    let CORNER_SQUARES = ['1', '3', '7', '9'];
    let availableCorners = CORNER_SQUARES.filter(num => freeSquares.includes(num));
    
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }
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
  return emptySquares(board).length === 0;
}

function chooseSquare(board, currentPlayer) {
  return currentPlayer === '1' ? playerChoosesSquare(board) : computerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === '1' ? '2' : '1';
}

while(true) {
  //console.clear();
  let playerScore = 0;
  let computerScore = 0;
  let currentPlayer = '';
  let firstMove = '';

  while(playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    let board = initializeBoard();
    
    while(true) {

      displayBoard(board);
      while (currentPlayer === '') {
        currentPlayer = rlSync.question('Who goes first?(1.Player/2.Computer)');
        firstMove = currentPlayer; //saves who makes the first move

        if (currentPlayer === '') {
          prompt('Please enter a valid answer');
        }
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

    if(playerScore === 5 || computerScore === 5) {
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

  if(answer === 'n') break;
  currentPlayer = ''; 
  firstMove = '';     
}
console.clear();
prompt('Thanks for playing, goodbye! 👋');



