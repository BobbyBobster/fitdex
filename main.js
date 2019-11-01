/***
 * TODO:
 *      + Fiks het zodat je niet alleen maar document.querySelector hebt, maar ook dat je in elements zoekt. Zoals main.querySelector. Dan kan je het overzichtelijker houden
 *
 *
***/


'use strict';


//
var app = {
  suits: ['Spades','Hearts','Clubs','Diamonds'],
  ranks: ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'],
  exercises: ['Pushup', 'Squat', 'Sit-up', 'Plank'],
  amountPerExercise: {
    'Ace': 20,
    'Jack': 11,
    'Queen': 12,
    'King': 13
  },
  cardHistory: [],
  docFragments: {
    app: null,
    settings: null
  },
  container: document.querySelector('.app')
};


function createDeck() {
  var deck = [];
  
  for (var i = 0; i < app.suits.length; i++) {
    for (var j = 0; j < app.ranks.length; j++) {
      var card = {suit:app.suits[i], rank:app.ranks[j]};
      deck.push(card);
    }
  }
  
  return deck;
}


function parseCardName(c) {
  return c.rank + ' of ' + c.suit;
}
function parseCardNumber(c) {
  switch (c.rank) {
    case 'Ace':
      return app.amountPerExercise.Ace;
    case 'Jack':
      return app.amountPerExercise.Jack;
    case 'Queen':
      return app.amountPerExercise.Queen;
    case 'King':
      return app.amountPerExercise.King;
    default:
      return c.rank;
    
  }
}
function parseCardExercise(c) {
  return app.exercises[app.suits.indexOf(c.suit)];
}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}



var deck = createDeck();
shuffle(deck);







// Settings menu
const settings_btn = document.querySelector('#btn-settings');
//settings_btn.addEventListener('click', atMain ? showSettings : showMain);
settings_btn.addEventListener('click', changeCard);

function showSettings() {
  const app = document.querySelector('.app');
  const container = document.querySelector('.grid-container');
  const settings = document.createElement('main');
  
  settings.setAttribute('class', 'settings');
  const div = document.createElement('div');
  div.textContent = 'SETTINGS TEXT';
  
  settings.appendChild(div);
  
  container.replaceChild(settings, app);
}

function showMain() {
  const settings = document.querySelector(',settings');
  const container = document.querySelector('.grid-container');
  const app = document.createElement('main');
  
  
}




// Change card
const next_btn = document.querySelector('#btn-next');
next_btn.addEventListener('click', changeCard);
const card_face = document.querySelector('.card-img');
card_face.addEventListener('click', changeCard);


function changeCardFOUT() {
  const name_div = document.querySelector('.card-name');
  const image = document.querySelector('.card-img');
  const exercise_div = document.querySelector('.exercise-name');
  // DIT KAN VEEL BETER MAAR IS VOOR TEST NU
  const card_div = document.querySelector('.card');
  
  const card = deck.pop();
  
  
  image.setAttribute('src', 'cardSprite.svg#'.concat(card.suit.charAt(0), card.rank.charAt(0)));
  image.setAttribute('alt', parseCardName(card));
  card_div.setAttribute('class', 'card card_lay');
  
  exercise_div.textContent = 'Do '.concat(parseCardNumber(card), ' ', parseCardExercise(card), 's!');
}

function changeCard() {
  const card = deck.pop();
  app.cardHistory.push(card);
  
  const pile = app.container.querySelector('.pile-wrapper');
  const cardLay = document.createElement('div');
  const image = document.createElement('img');
  
  
  cardLay.setAttribute('class', 'card card_lay');
  cardLay.setAttribute('style', 'z-index: '+ (10 + app.cardHistory.length));
  image.setAttribute('class', 'card-img');
  image.setAttribute('src', 'cardSprite.svg#'.concat(card.suit.charAt(0), card.rank.charAt(0)));
  image.setAttribute('alt', parseCardName(card));
  
  if (!!pile.querySelector('#first-card')) {
    pile.querySelector('#first-card').remove();
  }
  cardLay.appendChild(image);
  pile.appendChild(cardLay);
}