'use strict';
describe('Cards', function () {

  let testDeck = getDeck();

  it('Creates an array of a 54 elements', function () {
    //const testDeck = getDeck();
    expect(testDeck).to.have.lengthOf(54);
  });

  it('Creates an array of patterned strings', function () {
    for (var testCard of testDeck) {
      expect(testCard).to.match(/(((10|[0-9])|(J|Q|K|A))[♠|♥|♣|♦])|(jK|Jk)/);
    };
  });

  it('Shuffles the order of elements', function () {
    let shuffledDeck = shuffleDeck(testDeck);
    expect(shuffledDeck).to.have.lengthOf(54);
    for (var testCard of shuffledDeck) {
      expect(testCard).to.match(/(((10|[0-9])|(J|Q|K|A))[♠|♥|♣|♦])|(jK|Jk)/);
    };
  });

  it('Divides the array in four arrays', function () {
    let shuffledDeck = shuffleDeck(testDeck);
    let dealtCards = dealCards(shuffledDeck);
    let deck = dealtCards[0];
    let discard = dealtCards[1];
    let pOne = dealtCards[2];
    let pTwo = dealtCards[3];
    expect(dealtCards).to.have.lengthOf(4);
    expect(deck).to.have.lengthOf(43);
    expect(discard).to.have.lengthOf(1);
    expect(pOne).to.have.lengthOf(5);
    expect(pTwo).to.have.lengthOf(5);
  });

}); // end of tests
