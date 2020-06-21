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

function loadCard(card) {
  const sprite = new Image();
  sprite.src = card.imagePath;
  sprite.crossOrigin = "anonymous";
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

