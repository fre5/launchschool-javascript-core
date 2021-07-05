const rlSync = require('readline-sync');

class Card {
  constructor(rank) {
    this.rank = rank;
  }

  static FACE = ['J', 'Q', 'K', 'A'];

  static SUIT() {
    let suit = [];
    for (let rank = 2; rank <= 10; rank += 1) {
      suit.push(rank.toString());
    }
    suit = suit.concat(Card.FACE);
    return suit;
  }

  getRankPoint() {
    if (!isNaN(Number(this.rank))) {
      return parseInt(this.rank, 10);
    } else {
      return this.rank === 'A' ? [1, 11] : 10;
    }
  }
}

class Deck {
  constructor() {
    this.currentDeck = null;
  }

  static SUIT_QUANTITY = 4; // spade, diamond, heart, club

  static GET_ALL_CARDS() {
    let allCards = [];
    let allSuits = ['\u2664', '\u2661', '\u2667', '\u2662'];

    allSuits.forEach(suit => {
      let suitWithSymbol = Card.SUIT().map(card => card + suit);
      allCards = allCards.concat(suitWithSymbol);
    });

    return allCards;
  }

  shuffledDeck() {
    let allCards = Deck.GET_ALL_CARDS();
    let allCardsLength = allCards.length;

    let shuffles = [];
    while (shuffles.length < allCardsLength) {
      let randomCard = this.pickCard(allCards);
      allCards = this.currentDeck;
      shuffles.push(randomCard);
    }
    return shuffles;
  }

  pickCard(deck) {
    let index = Math.floor(Math.random() * deck.length);
    let card = deck[index];
    deck.splice(index, 1);
    this.currentDeck = deck;
    return card;
  }

  enoughCardToDeal(shuffledDeck) {
    return shuffledDeck.length < 4;
  }
}

class Participant {
  constructor() {
    this.cardsOnHand = [];
  }

  resetHand() {
    this.cardsOnHand = [];
  }

  hit(deck, shuffledDeckArray) {
    this.cardsOnHand.push(deck.pickCard(shuffledDeckArray));
  }

  getTotal() {
    let total = 0;
    let tempArray = [];

    this.cardsOnHand.forEach(card => {
      if (card[0] === 'A') {
        tempArray.push('A');
      } else {
        tempArray.unshift(card[0]);
      }
    });
    tempArray.forEach(card => {
      if (card === 'A') {
        total += (total + 10) >= 21 ? 1 : 11;
      } else {
        total += (new Card(card)).getRankPoint();
      }
    });
    return total;
  }

  displayCards(hide = false) {
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
  }

  isBusted() {
    return this.getTotal() > 21;
  }
}

class Player extends Participant {
  static INITIAL_CASH = 5;

  constructor() {
    super();
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

class Dealer extends Participant {
  constructor() {
    super();
  }

  hide() {
    this.displayCards(true);
  }

  reveal() {
    this.displayCards();
  }
}

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
        } while (!this.player.isBusted());
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
    while (!this.dealer.isBusted() && this.dealer.getTotal() < 17) {
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
    } else if (this.player.getTotal() > this.dealer.getTotal()) {
      this.sideWin(this.player);
    } else if (this.dealer.getTotal() > this.player.getTotal()) {
      this.sideWin(this.dealer);
    } else if (this.dealer.getTotal() === this.player.getTotal()) {
      this.roundOver = true;
      this.displayGameScreen();
      console.log("Tie round");
    }
    this.roundOver = false;
  }

  deal() {
    this.checkAndResetDeck();
    this.player.resetHand();
    [1,2].forEach(_ => this.player.hit(this.deck, this.shuffledDeckArray));
    this.dealer.resetHand();
    [1,2].forEach(_ => this.dealer.hit(this.deck, this.shuffledDeckArray));
  }

  checkAndResetDeck() {
    if (this.deck.enoughCardToDeal(this.shuffledDeckArray)) {
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
    console.log(this.deck.currentDeck);
    this.showCards();
    console.log("");
    this.displayParticipantsTotal();
    console.log("");
    this.player.displayCash();
    console.log("");
  }

  displayParticipantsTotal() {
    let playerBust = this.player.isBusted() ? "- Bust!" : "";
    let dealerBust = this.dealer.isBusted() ? "- Bust!" : "";

    if (this.roundOver) {
      console.log(`Dealer total : ${this.dealer.getTotal()} ${dealerBust}`);
    }
    console.log(`Player total : ${this.player.getTotal()} ${playerBust}`);
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
    this.roundOver = true;
    this.displayGameScreen();
    let answer = null;
    while (true) {
      console.log('Game over :(');
      answer = rlSync.question('Deposit $5 and play again?(y/n) ').toLowerCase();
      if (answer === 'y' || answer === 'n') break;
      console.log('Invalid input, please try again');
    }
    this.roundOver = false;
    this.player.resetCash();
    return answer === 'y';
  }
}

let game = new TwentyOneGame();
game.start();