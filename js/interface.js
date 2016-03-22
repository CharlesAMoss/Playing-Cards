'use strict';
$(document).ready(function () {
  $('#main').fadeIn('slow').append(display(...dealCards(getDeck())));
});
