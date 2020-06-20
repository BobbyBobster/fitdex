{
  const canvas = stage.querySelector("#card-layer");
  const ctx = canvas.getContext("2d");

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

}

