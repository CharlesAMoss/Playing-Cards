'use strict';

$(document).ready(function () {
  let deck = []; let discard = []; let pOne = []; let pTwo = [];
  let dealtCards = dealCards(shuffleDeck(getDeck()));
  $('#main').append(display(...dealtCards));

  $('#main span').on('click', function () {
    $(this).toggleClass('held');
    console.log($(this).text());
  });

});
