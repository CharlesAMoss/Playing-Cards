'use strict';

const startNewGame = () => {
  let deck = []; let discard = []; let pOne = []; let pTwo = [];
  return dealCards(shuffleDeck(getDeck()));
};

$(document).ready(function () {
  let dealtCards = startNewGame();

  let drawPile = document.createElement('img');
  drawPile.className = 'cardBack';
  drawPile.src = cardBack;
  drawPile.onclick = () => drawCard();

  let discardPile = document.createElement('div');
  let discardColor = suitColor(_.last(discard));
  discardPile.className = discardColor;
  discardPile.className += ' discard';
  discardPile.appendChild(document.createTextNode(_.last(discard)));
  discardPile.onclick = () => console.log('discard click');

  let playerOne = printCard(pOne);
  let playerTwo = printCard(pTwo);

  $('#main').append(drawPile, discardPile, playerOne, playerTwo);

  // let tempHand = [];
  // $('#main').append(display(...dealtCards));
  //
  // $('#main span').on('click', function () {
  //   $(this).toggleClass('held');
  //   console.log($(this).text());
  // });
  //
  // console.log(tempHand);
});
