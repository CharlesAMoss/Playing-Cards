'use strict';

const display = (deck, discard, pOne, pTwo) => (
  `${printCardBack()}
  ${styleCard(_.last(discard))}<hr><br>
  ${printCard(pOne)}<hr><br>
  ${printCard(pTwo)}<hr>`
);

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

  let discardPile = styleCard(_.last(discard));
  let playerOne = printCard(pOne);
  let playerTwo = printCard(pTwo);

  // discardPile.onclick = () => console.log('discard click');

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
