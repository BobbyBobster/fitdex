'use strict';

let app = {
  suits: ['Spades', 'Hearts', 'Clubs', 'Diamonds'],
  ranks: ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],
  exercises: ['Pushup', 'Squat', 'Sit-up', 'Plank'],
  amountPerExercise: {
    Ace: 15,
    Jack: 11,
    Queen: 12,
    King: 13
  },
  cardHistory: []
};

function createDeck() {
  let deck = [];
  
  for (let idx = 0; idx != app.suits.length; ++idx) 
    for (let jdx = 0; jdx != app.ranks.length; ++jdx) {
      let card = {
          suit: app.suits[idx], 
          rank: app.ranks[jdx]
      };
      deck.push(card);
    }

  return deck;
}

function name(card) {
  return card.rank + ' of ' + card.suit;
}

function number(card) {
  switch (card.rank) {
    case 'Ace':
      return app.amountPerExercise.Ace;
    case 'Jack':
      return app.amountPerExercise.Jack;
    case 'Queen':
      return app.amountPerExercise.Queen;
    case 'King':
      return app.amountPerExercise.King;
    default:
      return card.rank;
  }
}

function exercise(card) {
  return app.exercises[app.suits.indexOf(card.suit)];
}

