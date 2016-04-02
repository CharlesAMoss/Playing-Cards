'use strict';

const startNewGame = () => {
  let deck = []; let discard = []; let pOne = []; let pTwo = [];
  return dealCards(shuffleDeck(getDeck()));
};

// const checkExist = setInterval(function () {
//   if ($('span.held')) {
//     console.log('Exists!');
//     clearInterval(checkExist);
//   }
// }, 100);

$(document).ready(function () {
  let dealtCards = startNewGame();

  let turn = 0;
  let player = [];

  (turn % 2 === 0) ? (player = pOne, turn += 1) : (player = pTwo, turn += 1);
  console.log(player);

  let drawPile = document.createElement('img');
  drawPile.className = 'cardBack';
  drawPile.src = cardBack;
  drawPile.onclick = () => drawCard(player);

  let discardPile = document.createElement('div');
  let discardColor = suitColor(_.last(discard));
  discardPile.className = discardColor;
  discardPile.className += ' discard';
  discardPile.appendChild(document.createTextNode(_.last(discard)));

  let mainPiles = document.createElement('div');
  mainPiles.className = 'mainPiles';
  mainPiles.appendChild(drawPile);
  mainPiles.appendChild(discardPile);

  let playerOne = document.createElement('div');
  playerOne.className = 'playerOne';

  let playerTwo = document.createElement('div');
  playerTwo.className = 'playerTwo';

  let discardButton = document.createElement('button');
  discardButton.className = 'btn';
  discardButton.appendChild(document.createTextNode('discard'));

  let winButton = document.createElement('button');
  winButton.className = 'btn';
  winButton.appendChild(document.createTextNode('Yaniv'));
  winButton.onclick = console.log('It is not that easy');

  $('#main').append(mainPiles, playerOne, playerTwo);
  $('.playerOne').html(printCard(pOne));
  $('.playerTwo').html(printCard(pTwo));
  $('#aside').append(discardButton, winButton);

  $('.playerOne').children().on('click', function (event) {
    if ($(this).hasClass('held')) {
      let heldCard = $(this).text();
      discardCard(heldCard, player);
      $('.discard').html(document.createTextNode(_.last(discard)));
      let currentSuit = suitColor(_.last(discard));
      $('.discard').removeClass().addClass(currentSuit);
      discardPile.className += ' discard';
      $('.playerOne').html(printCard(pOne));
    } else {
      $(this).toggleClass('held');
      console.log($(this).text());
    };
  });

});
