'use strict';
describe('Cards', function () {

  it('creates an array of a 52 card deck', function () {
    let testDeck = getDeck();

    expect(testDeck.length).to.equal(52);
  });

});
