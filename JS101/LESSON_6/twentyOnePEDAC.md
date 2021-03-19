**PROBLEM**

Build a simple blackjack game without the split and double down features.

Rules:
  - The game consists of Player and dealer (computer)
  - There are 52 cards deck with 4 suits :
    - Hearts, Diamonds, Clubs, and Spades
  - Each suits have 13 values :
    - 2, 3, 4, 5, 6, 7, 8, 9, and 10
    - Jack, Queen, King, Ace
  - Player goal is to get as close to 21
  - Player lose if they go over 21
  - Player can see their own cards
  - Player can only see one of dealer's cards
  - Ace cards worth 1 or 11
  - Jack, Queen, King cards each has a value of 10
  - Player always goes first
  - Player gets two options, hit or stay :
  - Player can hit as many times as long as they dont bust
  - If player bust, dealer win and game is over
  - If dealer bust, player win and game is over
  - Dealer can hit or stay until total is 17
  - When both player and dealer stay, compare both values to decide the winner

**EXAMPLES/TEST SAMPLES**

***TEST CASES***
Dealer has: Ace and unknown card
You have: 2 and 8

Dealer has: 7 and unknown card
You have: 10 and 7

Dealer has: 5 and unknown card
You have: Jack and 6

***FLOW***
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn : hit or stay, repeat until bust or stay
4. If player bust, dealer wins
5. Dealer turn : hit or stay, repeat until total >= 17
6. If dealer bust, player wins
7. Compare player and dealer cards and declare winner

**DATA STRUCTURE**
- deckValue object stores value of each cards
- deckAmount object stores the amount of each cards
- Array of playerCard stores the player cards
- Array of dealerCard stores the dealer cards

**ALGORITHM**

**CODE**

