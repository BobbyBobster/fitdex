function parseTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  if (seconds < 10)
    return `${minutes}:0${seconds}`;
  return `${minutes}:${seconds}`;
}

function createDeck() {
  let deck = [];
  
  for (let idx = 0; idx != app.ranks.length; ++idx) 
    for (let jdx = 0; jdx != app.suits.length; ++jdx) 
      deck.push(new Card(app.ranks[idx], app.suits[jdx]));
  return deck;
}

