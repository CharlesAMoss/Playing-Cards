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

  let mainPiles = document.createElement('div');
  mainPiles.className = 'mainPiles';
  mainPiles.appendChild(drawPile);
  mainPiles.appendChild(discardPile);

  let playerOne = document.createElement('div');
  playerOne.className = 'playerOne';

  let playerTwo = document.createElement('div');
  playerTwo.className = 'playerTwo';
  console.log(playerTwo);

  $('#main').append(mainPiles, playerOne, playerTwo);
  $('.playerOne').html(printCard(pOne));
  $('.playerTwo').html(printCard(pTwo));

  $('.playerOne').children().on('click', function () {
    $(this).toggleClass('held');
    console.log($(this).text());
  });
});
