const rlSync = require('readline-sync');
const gameModes = {
  21: 17, 31: 27, 41: 37, 51: 47
};
const DECK_VALUE = {
  2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
  J: 10, Q: 10, K: 10, A: [1, 11]
};
const DECK_AMOUNT = {
  2: 4, 3: 4, 4: 4, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4, 10: 4,
  J: 4, Q: 4, K: 4, A: 4
};

let playerScore = 0;
let dealerScore = 0;

function prompt(msg) {
  return console.log(msg);
}

function pickACard(playingDeck) {
  while (true) {
    let card = Object.keys(DECK_VALUE)[Math.floor(Math.random() * 13)];

    if (playingDeck[card] > 0) {
      playingDeck[card] -= 1;
      return card;
    }
  }
}

function hit(cardOnHand, playingDeck) {
  cardOnHand.push(pickACard(playingDeck));
  return cardOnHand;
}

//This function returns true when 1st argument is selected and false otherwise.
function option(question, option1, option2) {
  let answer = rlSync.question(`${question} (${option1}/${option2}) `).toLowerCase();
  while (answer !== option1 && answer !== option2) {
    answer = rlSync.question(`Please enter a valid answer (${option1}/${option2}) `).toLowerCase();
  }
  return answer === option1;
}

function adjustTotalForAces(total) {
  if (total <= 10) {
    total += DECK_VALUE['A'][1];
  } else {
    total += DECK_VALUE['A'][0];
  }
  return total;
}

function checkTotal(cardsOnHand) {
  let total = 0;
  cardsOnHand.forEach(num => {
    if (num === 'A') {
      total = adjustTotalForAces(total);
    } else {
      total += DECK_VALUE[num];
    }
  });
  return total;
}

function dealerLogic(dealerCards, playingDeck, gameMode) {
  while (checkTotal(dealerCards) < gameModes[gameMode]) {
    hit(dealerCards, playingDeck);
  }
  return checkTotal(dealerCards);
}

function getWinner(playerTotal, dealerTotal, gameMode) {
  let winner = '';
  if (playerTotal > Number(gameMode)) {
    winner = 'Dealer';
  } else if (dealerTotal > Number(gameMode)) {
    winner = 'Player';
  } else if (playerTotal === dealerTotal) {
    winner = 'Tie';
  } else if (playerTotal > dealerTotal) {
    winner = 'Player';
  } else if (dealerTotal > playerTotal) {
    winner = 'Dealer';
  }
  return winner;
}

function displayGameName(gameMode) {
  const gameName = {21: 'TwentyOne', 31: 'ThirtyOne', 41: 'FourtyOne', 51: 'FiftyOne'};
  prompt(`\u2664 \u2661 \u2667 \u2662 ${gameName[gameMode]} \u2664 \u2661 \u2667 \u2662 \n`);
}

function gameModePicker() {
  let gameMode = '';
  while (!Object.keys(gameModes).includes(gameMode)) {
    gameMode = rlSync.question('Choose what game you\'d like to play? ');
    if (gameMode === '1') {
      gameMode = '21';
    } else if (gameMode === '2') {
      gameMode = '31';
    } else if (gameMode === '3') {
      gameMode = '41';
    } else if (gameMode === '4') {
      gameMode = '51';
    }
  }
  return gameMode;
}

//Main game loop.
while (true) {
  console.clear();

  //Title and main screen.
  prompt(`\u2664 \u2661 \u2667 \u2662 Whatever-One \u2664 \u2661 \u2667 \u2662`);
  prompt('Best of 5 to win\n');
  prompt('1. TwentyOne\n2. ThirtyOne\n3. FourtyOne\n4. FiftyOne\n');

  //Pick a game mode.
  let gameMode = gameModePicker();

  //Reset the deck.
  let playingDeck = JSON.parse(JSON.stringify(DECK_AMOUNT));

  while (true) {
    console.clear();

    //Reset the cards on hands, scores, and state of game.
    let playerCards = [];
    let dealerCards = [];
    let playerTotal = 0;
    let dealerTotal = 0;
    let roundOver = false;

    while (true) {
      console.clear();
      displayGameName(gameMode);

      if (dealerTotal < gameModes[gameMode]) {
        dealerLogic(dealerCards, playingDeck, gameMode);
      }
      while (playerCards.length < 2) hit(playerCards, playingDeck);

      prompt(`Dealer has: ${dealerCards[0]} and an unknown card`);
      prompt(`You have: ${playerCards.join(' , ').split(',').slice(0, -1)}and ${playerCards.slice(-1)} \n`);

      playerTotal = checkTotal(playerCards);
      dealerTotal = checkTotal(dealerCards);

      if (playerTotal > Number(gameMode)) {
        roundOver = true;
      } else if (option('Hit or Stay', 'h', 's')) {
        hit(playerCards, playingDeck);
      } else {
        roundOver = true;
      }

      console.clear();
      displayGameName(gameMode);
      if (roundOver) {
        switch (getWinner(playerTotal, dealerTotal, gameMode)) {
          case 'Player':
            prompt('!! You win the round !!');
            playerScore++;
            break;
          case 'Dealer':
            prompt('** Dealer wins the round **');
            dealerScore++;
            break;
          case 'Tie':
            prompt('** It\'s a tie **');
            break;
        }
        break;
      }
    }

    prompt(`\nDealer has: ${dealerCards.join(' , ').split(',').slice(0, -1)}and ${dealerCards.slice(-1)}`);
    prompt(`You have: ${playerCards.join(' , ').split(',').slice(0, -1)}and ${playerCards.slice(-1)}\n`);
    prompt(`Dealer score: ${dealerScore}`);
    prompt(`Player score: ${playerScore}\n`);

    if (playerScore === 5 || dealerScore === 5) {
      if (playerScore === 5) {
        prompt('You win the game!');
      } else {
        prompt('Dealer wins the game');
      }
      playerScore = 0;
      dealerScore = 0;
      break;
    } else {
      rlSync.question('Press enter to continue ');
    }
  }
  if (!option('Play again?', 'y', 'n')) break;
}
console.clear();
prompt('Thanks for playing, goodbye! 👋');