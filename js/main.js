'use strict';

// Creates deck of 52 cards
const getDeck = () => {
  let deck = [];
  const numVal = _.range(2, 11).map(String);
  const faceVal = ['J', 'Q', 'K', 'A'];
  const value = numVal.concat(faceVal);
  const suits = ['♠', '♥', '♣', '♦'];
  for (var suit of suits) {
    const cards = value.map(val => val + suit);
    deck.push(cards);
  }

  deck = _.flatten(deck);
  return deck;
};

// Randomly orders an array
const shuffleDeck = (deck) => _.shuffle(deck);

/*
// Sorts the 52 card deck into a 41 card deck,
// two 5 card hands and a one card discard pile.
*/
const dealCards = (deck) => {
  let discard = []; let pOne = []; let pTwo = [];
  for (var card of deck) {
    (card === deck[0]) ? pTwo.push(card) :
    (card === deck[1]) ? pOne.push(card) :
    (card === deck[2]) ? pTwo.push(card) :
    (card === deck[3]) ? pOne.push(card) :
    (card === deck[4]) ? pTwo.push(card) :
    (card === deck[5]) ? pOne.push(card) :
    (card === deck[6]) ? pTwo.push(card) :
    (card === deck[7]) ? pOne.push(card) :
    (card === deck[8]) ? pTwo.push(card) :
    (card === deck[9]) ? pOne.push(card) :
    (card === deck[10]) ? discard.push(card) : stop;
  }

  deck = deck.slice(11, 52);
  return [deck, discard, pOne, pTwo];
};

// A conditional that returns a string for styling the color.
const suitColor = (card) => {
  let color = '';
  (card.includes('♥') || card.includes('♦'))
  ? color = 'red'
  : color = 'blk';
  return color;
};

const getValue = (card) => {
  let value = [];
  let num = parseInt(card, 10);
  (isNaN(num)) ? num = 10 : stop;
  let suit = card.slice(-1);
  value.push(num, suit);
  return value;
};

//console.log(getDeck());
//console.log(shuffleDeck(getDeck()));
//console.log(dealCards(getDeck()));

const display = (deck) => {
  let print = '';
  for (var card of deck) {
    print += '<span class="' + suitColor(card) + 'Suit">' + card + '</span>';
    console.log(getValue(card));
  }

  return print;
};

document.getElementById('main').innerHTML = display(shuffleDeck(getDeck()));
