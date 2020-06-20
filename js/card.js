class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  get name() {
    return this.rank + " of " + this.suit;
  }

  get number() {
    switch (this.rank) {
      case "Ace":
        return opt.amountPerExercise.Ace;
      case "Jack":
        return opt.amountPerExercise.Jack;
      case "Queen":
        return opt.amountPerExercise.Queen;
      case "King":
        return opt.amountPerExercise.King;
      default:
        return this.rank;
    }
  }

  get exercise() {
    return opt.exercises[app.suits.indexOf(this.suit)];
  }

  get imagePath() {
    if (this.rank === "10")
      return `/img/cards/10${this.suit[0]}.svg`;
    return `/img/cards/${this.rank[0]}${this.suit[0]}.svg`;
  }

  get emoji() {
    switch (this.suit) {
      case "Spades":
        return "♠️";
      case "Hearts":
        return "♥️";
      case "Clubs":
        return "♣️";
      case "Diamonds":
        return "♦️";
    }
  }

  get visual() {
    if (this.rank === "10")
      return `10${this.emoji}`;
    return `${this.rank[0]}${this.emoji}`;
  }
}

