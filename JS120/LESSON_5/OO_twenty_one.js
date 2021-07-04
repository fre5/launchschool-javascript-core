const rlSync = require('readline-sync');

class Card {
  constructor(rank) {
    this.rank = rank;
  }

  getPoint() { //return the point of a rank
    if (!isNaN(Number(this.rank))) {
      return parseInt(this.rank, 10);
    } else {
      return this.rank === 'A' ? [1, 11] : 10;
    }
  }
}

class Deck {
  static SUIT_QUANTITY = 4; // spade, diamond, heart, club

  static GET_SUIT() { //returns an array of ranks ['2', '3', ... ]
    let suit = [];
    for (let rank = 2; rank <= 10; rank += 1) {
      suit.push(rank.toString());
    }
    suit.push('J', 'Q', 'K', 'A');
    return suit;
  }

  static GET_ALL_CARDS() { //returns an ordered deck / all cards
    let allCards = [];
    for (let counter = 1; counter <= Deck.SUIT_QUANTITY; counter += 1) {
      allCards = allCards.concat(Deck.GET_SUIT());
    }
    return allCards;
  }

  shuffledDeck() { //returns a shuffled deck of cards
    let allCards = Deck.GET_ALL_CARDS();
    let allCardsLength = allCards.length;

    let shuffles = [];
    while (shuffles.length < allCardsLength) {
      let randomCard = this.pickCard(allCards);
      allCards = randomCard.remainingCards;
      shuffles.push(randomCard.card);
    }
    return shuffles;
  }

  pickCard(deck) { //pick a random card
    let index = Math.floor(Math.random() * deck.length);
    let card = deck[index];
    deck.splice(index, 1);
    return {
      card: card, //the random card
      remainingCards: deck //the remaining cards on deck
    };
  }
}

let Side = {
  cardsOnHand:[],

  resetHand() {
    this.cardsOnHand = [];
  },

  hit(deck, shuffledDeckArray) { //adds a new randomly picked card to cards on hand
    this.cardsOnHand.push(deck.pickCard(shuffledDeckArray).card);
  },

  getPoints() { //returns the total points on the current hand
    let total = 0;
    let tempArray = [];
    this.cardsOnHand.forEach(card => {
      if (card === 'A') {
        tempArray.push('A');
      } else {
        tempArray.unshift(card);
      }
    });
    tempArray.forEach(card => {
      if (card === 'A') {
        total += (total + 10) >= 21 ? 1 : 11;
      } else {
        total += (new Card(card)).getPoint();
      }
    });
    return total;
  },

  displayCards(hide = false) { //display hands on the screen
    let cardsString = "";
    this.cardsOnHand.forEach((card, index) => {
      let comma = index === 0 ? '' : ', ';
      if (index === this.cardsOnHand.length - 1) {
        cardsString += `, and ${hide ? 'an unknown card' : card}`;
      } else {
        cardsString += `${comma}${card}`;
      }
    });
    console.log(this.constructor.name + " : " + cardsString);
  },

  isBusted() {
    return this.getPoints() > 21;
  }
};

class Player {
  static INITIAL_CASH = 5;

  constructor() {
    this.cash = Player.INITIAL_CASH;
  }

  move() {
    let answer = null;
    while (true) {
      answer = rlSync.question('Hit or Stay?(h/s) ').toLowerCase();
      if (answer === 'h' || answer === 's') break;
      console.log('Invalid input, please try again');
    }
    return answer;
  }

  resetCash() {
    this.cash = Player.INITIAL_CASH;
  }

  displayCash() {
    console.log(`Player cash : $ ${this.cash}`);
  }

  winRound() {
    this.cash += 1;
  }

  loseRound() {
    this.cash -= 1;
  }

  isBroke() { //out of cash
    return this.cash === 0;
  }
}

class Dealer {

  hide() {  //shows a closed card
    this.displayCards(true);
  }

  reveal() {
    this.displayCards();
  }
}

Object.assign(Player.prototype, Side);
Object.assign(Dealer.prototype, Side);

class TwentyOneGame {
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
    this.shuffledDeckArray = this.deck.shuffledDeck();
    this.roundOver = false;
  }

  shuffleNewDeck() {
    this.shuffledDeckArray = this.deck.shuffledDeck();
  }

  start() {
    this.displayWelcomeMessage();

    do { //play again prompt loop
      this.player.resetCash();
      while (!this.player.isBroke()) { //out of cash loop
        do { //round loop
          if (this.player.isBroke()) break; //when player is broke, gets out of loop
          this.deal();
          this.round();
        }
        while (!this.player.isBusted());
      }
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  round() {
    this.playerTurn();
    this.dealerTurn();
    this.roundResult();
    if (this.player.cash !== 0) {
      rlSync.question('\nPress any key to continue ');
    }
    this.displayGameScreen();
  }

  playerTurn() {
    this.displayGameScreen();

    while (!this.player.isBusted()) {

      if (this.player.move() === 's') break;

      this.checkAndResetDeck();
      this.player.hit(this.deck, this.shuffledDeckArray);
      this.displayGameScreen();
    }
  }

  dealerTurn() {
    while (!this.dealer.isBusted() && this.dealer.getPoints() < 17) {
      this.checkAndResetDeck();
      this.dealer.hit(this.deck, this.shuffledDeckArray);
    }
    this.displayGameScreen();
  }

  sideWin(winner) {
    let name = winner.constructor.name;
    if (name === 'Player') {
      this.player.winRound();
    } else { this.player.loseRound() }
    this.roundOver = true;
    this.displayGameScreen();
    console.log(`${name} wins the round!`);
  }

  roundResult() {
    if (this.player.isBusted()) {
      this.sideWin(this.dealer);
    } else if (this.dealer.isBusted()) {
      this.sideWin(this.player);
    } else if (this.player.getPoints() > this.dealer.getPoints()) {
      this.sideWin(this.player);
    } else if (this.dealer.getPoints() > this.player.getPoints()) {
      this.sideWin(this.dealer);
    } else if (this.dealer.getPoints() === this.player.getPoints()) {
      this.roundOver = true;
      this.displayGameScreen();
      console.log("Tie round");
    }
    this.roundOver = false;
  }

  deal() { //checks if there's enough cards in the deck and resets hands
    if (this.shuffledDeckArray.length - 4 < 0) {
      this.shuffleNewDeck();
    }
    this.player.resetHand();
    [1,2].forEach(_ => this.player.hit(this.deck, this.shuffledDeckArray));
    this.dealer.resetHand();
    [1,2].forEach(_ => this.dealer.hit(this.deck, this.shuffledDeckArray));
  }

  checkAndResetDeck() { //to make sure there is enough card before a player hit
    if (this.shuffledDeckArray.length === 0) {
      this.shuffleNewDeck();
    }
  }

  displayWelcomeMessage() {
    let suits = '\u2664 \u2661 \u2667 \u2662';
    console.clear();
    console.log(" ___________________________________________________ ");
    console.log("|                                                   |");
    console.log("|                                                   |");
    console.log(`|       ${suits} Welcome to Twenty One ${suits}       |`);
    console.log("|                                                   |");
    console.log("|___________________________________________________|");
    rlSync.question('\nPress any key to continue ');
  }

  displayGameScreen() {
    console.clear();
    this.displayTitle();
    this.showCards();
    console.log("");
    this.player.displayCash();
    console.log("");
  }

  displayTitle() {
    let suits = '\u2664 \u2661 \u2667 \u2662';
    console.log(`${suits} Twenty One ${suits}\n`);
  }

  displayGoodbyeMessage() {
    console.clear();
    console.log(" ___________________________________________________ ");
    console.log("|                                                   |");
    console.log("|                                                   |");
    console.log(`|          Thank you for playing! Goodbye!          |`);
    console.log("|                                                   |");
    console.log("|___________________________________________________|\n");
  }

  showCards() {
    if (this.roundOver) {
      this.dealer.reveal();
    } else {
      this.dealer.hide();
    }
    this.player.displayCards();
  }

  playAgain() {
    let answer = null;
    while (true) {
      console.log('Game over :(');
      answer = rlSync.question('Deposit $5 and play again?(y/n) ').toLowerCase();
      if (answer === 'y' || answer === 'n') break;
      console.log('Invalid input, please try again');
    }
    this.player.resetCash();
    return answer === 'y';
  }
}

let game = new TwentyOneGame();
game.start();