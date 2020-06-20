class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  get name() {
    return this.rank + ' of ' + this.suit;
  }

  get number() {
    switch (this.rank) {
      case 'Ace':
        return opt.amountPerExercise.Ace;
      case 'Jack':
        return opt.amountPerExercise.Jack;
      case 'Queen':
        return opt.amountPerExercise.Queen;
      case 'King':
        return opt.amountPerExercise.King;
      default:
        return this.rank;
    }
  }

  get exercise() {
    return opt.exercises[app.suits.indexOf(this.suit)];
  }
}

