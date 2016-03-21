'use strict';
describe('Cards', function () {

  let testDeck = getDeck();
  let shuffledDeck = shuffleDeck(testDeck);
  let dealtCards = dealCards(shuffledDeck);

  it('Creates an array of a 54 elements', function () {
    expect(testDeck).to.have.lengthOf(54);
  });

  it('Creates an array of patterned strings', function () {
    for (var testCard of testDeck) {
      expect(testCard).to.match(/(((10|[2-9])|(J|Q|K|A))[♠|♥|♣|♦])|(jK|Jk)/);
    };
  });

  it('Shuffles the order of elements', function () {
    expect(shuffledDeck).to.have.lengthOf(54);
    for (var testCard of shuffledDeck) {
      expect(testCard).to.match(/(((10|[2-9])|(J|Q|K|A))[♠|♥|♣|♦])|(jK|Jk)/);
    };
  });

  it('Divides the array into four arrays', function () {
    deck = dealtCards[0];
    discard = dealtCards[1];
    pOne = dealtCards[2];
    pTwo = dealtCards[3];
    expect(dealtCards).to.have.lengthOf(4);
    expect(deck).to.have.lengthOf(43);
    expect(discard).to.have.lengthOf(1);
    expect(pOne).to.have.lengthOf(5);
    expect(pTwo).to.have.lengthOf(5);
  });

  it('Adds an element to an array', function () {
    let testHand = dealtCards[2];
    let testCard = dealtCards[0][0];
    testHand.pop();
    addCard(testCard, testHand);
    expect(testCard).to.be.oneOf(testHand);
    expect(testHand).to.have.lengthOf(5);
  });

  it('Removes a specfied element from an array', function () {
    let testHand = dealtCards[2];
    let testCard = dealtCards[0][0];
    testHand.pop();
    addCard(testCard, testHand);
    removeCard(testHand, testCard);
    expect(testCard).to.not.be.oneOf(testHand);
    expect(testHand).to.have.lengthOf(4);
  });

  it('Adds an element to an array and removes element from origin', function () {
    let testDeck = dealtCards[0];
    let testHand = dealtCards[2];
    let testCard = testDeck[0];
    takeCard(testDeck, testCard, testHand);
    expect(testCard).to.not.be.oneOf(testDeck);
    expect(testCard).to.be.oneOf(testHand);
    expect(testHand).to.have.lengthOf(5);
  });

  it('Removes the 1st indexed element of "deck" array and adds it to specfied array', function () {
    deck = dealtCards[0];
    let testHand = dealtCards[2];
    let testCard = dealtCards[0][0];
    testHand.pop();
    drawCard(testHand);
    expect(testCard).to.not.be.oneOf(deck);
    expect(testCard).to.be.oneOf(testHand);
    expect(testHand).to.have.lengthOf(5);
  });

  it('Removes a specfied element from an array and adds it to "discard" array', function () {
    discard = dealtCards[1];
    let testHand = dealtCards[2];
    let testCard = dealtCards[2][0];
    discardCard(testCard, testHand);
    expect(testCard).to.not.be.oneOf(testHand);
    expect(testCard).to.be.oneOf(discard);
    expect(testHand).to.have.lengthOf(4);
  });

  // ["A♠", "5♥", "3♦", "Q♠", "jK"]

  it('Parses a "card" element and returns an integer and a string', function () {
    let testCard1 = 'Q♠';
    let testCard2 = 'jK';
    let testCard3 = 'A♥';
    let testCard4 = '5♣';
    let value1 = cardValue(testCard1);
    expect(value1).to.be.deep.equal([10, '♠']);
    let value2 = cardValue(testCard2);
    expect(value2).to.be.deep.equal([0, '*']);
    let value3 = cardValue(testCard3);
    expect(value3).to.be.deep.equal([1, '♥']);
    let value4 = cardValue(testCard4);
    expect(value4).to.be.deep.equal([5, '♣']);
  });

  it('Sorts "cardValue" integer for handValue()', function () {
    let testCard = 'Q♠';
    let value = cardValue(testCard);
    let testValue = countCards(value[0]);
    expect(testValue).to.be.equal(10);
  });

}); // end of tests
