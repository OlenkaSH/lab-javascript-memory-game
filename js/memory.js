class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // find the random shuffled Card (index of element in cards array)
    if (!this.cards) {
      return undefined;
    }

    const shuffledCards = [];

    for (let i = 0; i < 24; i++) {
      const indexOfRandomCard = Math.floor(Math.random() * this.cards.length);

      // now we need to remove this random card from cards array and put it to the new array with shuffled cards

      let currentCard = this.cards[indexOfRandomCard];
      let removedCard = this.cards.splice(indexOfRandomCard, 1);
      shuffledCards.push(removedCard);
      return shuffledCards;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 8) {
      this.cards = [];
      return true;
    }
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
