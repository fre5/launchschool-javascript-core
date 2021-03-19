const rlSync = require('readline-sync');
const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const deckValue = {
  2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
  J: 10, Q: 10, K: 10, A: [1, 11]
};
const deckAmount = {
  2: 4, 3: 4, 4: 4, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4, 10: 4,
  J: 4, Q: 4, K: 4, A: 4
};


function prompt(msg) {
  return console.log(msg);
}

function generateCard(playingDeck) { 
  while (true) {
    let card = deck[Math.floor(Math.random() * 13)];
    
    if(playingDeck[card] > 0) {
      playingDeck[card] -= 1;
      return card;
    } 
  }
}

function hit(cardOnHand, playingDeck) {
  cardOnHand.push(generateCard(playingDeck));
  return cardOnHand;
}

//This function returns true when first argument is selected and false otherwise.
function option(question, option1, option2) {
  let answer = rlSync.question(`${question} (${option1}/${option2})`).toLowerCase();
  while (answer !== option1 && answer !== option2) {
    answer = rlSync.question(`Please enter a valid answer (${option1}/${option2})`);
  }
  return answer === option1;
} 

function checkTotal(cardsOnHand) {
  let total = 0;
  cardsOnHand.forEach(num => {
    if (num === 'A') {
      if (total <= 10) {
        total += deckValue[num][1];
      } else {
        total += deckValue[num][0];
      }
    } else {
      total += deckValue[num];
    }
  });
  return total;
}

function dealerLogic(dealerCards, playingDeck) {
  while(checkTotal(dealerCards) < 17) {
    hit(dealerCards, playingDeck);
  }
  return checkTotal(dealerCards);
}

function getWinner(playerCards, dealerCards) {
  let playerTotal = checkTotal(playerCards);
  let dealerTotal = checkTotal(dealerCards);

  if (playerTotal > 21) {
    prompt('Dealer wins');
  } else {
    if (dealerTotal > 21 || playerTotal > dealerTotal) {
      prompt('You win!');
    } else if (playerTotal < dealerTotal) {
      prompt('Dealer wins');
    } else {
      prompt('It\'s draw');
    }
  }
}

prompt('TwentyOne \u2664 \u2661 \u2667 \u2662 \n');

while (true) {
  console.clear();
  //Reset the complete deck.
  let playingDeck = JSON.parse(JSON.stringify(deckAmount));
  let playerCards = [];
  let dealerCards = [];
  let gameOver = false;
  
  while (true) {
    if (checkTotal(dealerCards) < 17) dealerLogic(dealerCards, playingDeck);

    prompt(`Dealer has: ${dealerCards[0]} and unknown card`);

    while (playerCards.length < 2) hit(playerCards, playingDeck);

    prompt(`You have: ${playerCards.join(' , ').split(',').slice(0, -1)}and ${playerCards.slice(-1)} \n`);

    if (checkTotal(playerCards) > 21) {
      gameOver = true;
    } else if (option('Hit or Stay', 'h', 's')) {
      hit(playerCards, playingDeck);
    } else {
      gameOver = true;
    }
    console.clear();
    if (gameOver) break;
  }
  prompt(`You have: ${playerCards.join(' , ').split(',').slice(0, -1)}and ${playerCards.slice(-1)} \n`);
  prompt(`Dealer has: ${dealerCards.join(' , ').split(',').slice(0, -1)}and ${dealerCards.slice(-1)} \n`);

  getWinner(playerCards, dealerCards);
  if (!option('Play again?', 'y', 'n')) break;
}
console.clear();
prompt('Thanks for playing, goodbye! 👋');