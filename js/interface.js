'use strict';

const startNewGame = () => {
  let deck = []; let discard = []; let pOne = []; let pTwo = [];
  return dealCards(shuffleDeck(getDeck()));
};

$(document).ready(function () {
  let dealtCards = startNewGame();
  let tempHand = [];
  $('#main').append(display(...dealtCards));

  $('#main span').on('click', function () {
    $(this).toggleClass('held');
    console.log($(this).text());
  });

  if ($('#main span').hasClass('held')) {
    tempHand.push($(this).text());
    return tempHand;
  }

  console.log(tempHand);
});
