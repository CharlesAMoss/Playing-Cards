'use strict';
describe('Cards', function () {

  it('Creates an array of a 54 elements', function () {
    const testDeck = getDeck();
    expect(testDeck).to.have.lengthOf(54);
  });

  it('Creates an array of patterned strings', function () {
    const testDeck = getDeck();
    for (var testCard of testDeck) {
      expect(testCard).to.match(/(((10|[0-9])|(J|Q|K|A))[♠|♥|♣|♦])|(JK)/);
    };
  });

});
