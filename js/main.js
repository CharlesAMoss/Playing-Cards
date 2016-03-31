'use strict';

// Creates deck of 52 cards
let deck = []; let discard = []; let pOne = []; let pTwo = [];

const getDeck = () => {
  const numVal = _.range(2, 11).map(String);
  const faceVal = ['J', 'Q', 'K', 'A'];
  const jokers = ['Jk', 'jK'];
  const value = numVal.concat(faceVal);
  const suits = ['♠', '♥', '♣', '♦'];
  for (var suit of suits) {
    const cards = value.map(val => val + suit);
    deck.push(cards);
  }

  deck = deck.concat(jokers);
  deck = _.flatten(deck);
  return deck;
};

// Randomly orders an array
const shuffleDeck = (deck) => _.shuffle(deck);

// Adds an element to an array.
const addCard = (card, hand) => (hand.push(card));

// Removes a specfied element from an array
const removeCard = (deck, card) => {
  const index = deck.indexOf(card);
  (index > -1) ? deck.splice(index, 1) : stop;
};

// Adds an element to an array and removes element from origin
const takeCard = (deck, card, hand) => {
  addCard(card, hand);
  removeCard(deck, card);
};

/*
// Removes the first indexed element from
// deck array and adds it to a specfied array
*/
const drawCard = (hand) => {
  takeCard(deck, deck[0], hand);
};

// Removes a specfied element from an array
const discardCard = (card, hand) => {
  addCard(card, discard);
  removeCard(hand, card);
};

/*
// Sorts the 52 card deck into a 41 card deck,
// two 5 card hands and a one card discard pile.
*/
const dealCards = (deck) => {
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

  deck = deck.slice(11, 54);
  return [deck, discard, pOne, pTwo];
};

// parses a card into an integer value and a string suit
const cardValue = (card) => {
  let value = [];
  let suit = card.slice(-1);
  let num = parseInt(card, 10);
  (card.match(/A[♠|♥|♣|♦]/)) ? num = 1  : stop;
  (card.match(/(jK|Jk)/)) ? (num = 0, suit = '*') : stop;
  (isNaN(num)) ? num = 10 : stop;
  value.push(num, suit);
  return value;
};

// sorts "cardValue" integer for handValue()
const countCards = (cardValue) => {
  let total = 0;
  (Number.isInteger(cardValue)) ? total += cardValue : stop;
  return total;
};

// adds the integer values of specfied array
const handValue = (hand) => (
  _.flatten(hand.map(cardValue))
  .map(countCards)
  .reduce((a, b) => (a + b), 0)
);

/*
****************************************************** display *
**/

// A conditional that returns a string for styling the color.
const suitColor = (card) => {
  let color = '';
  (card.includes('♥') || card.includes('♦'))
  ? color = 'redSuit' : color = 'blkSuit';
  return color;
};

const styleCard = (card) => (
  `<span class="${suitColor(card)}">${card}</span>`
);

const cardBack = `card_back.svg`;
const printCardBack = () => (`<img class="cardBack" src="${cardBack}" />`);

// removes comma between printed elements
const printCard = (deck) => (deck.map(styleCard).join(''));

const display = (deck, discard, pOne, pTwo) => (
  `${printCardBack()}
  ${styleCard(_.last(discard))}<hr><br>
  ${printCard(pOne)}<hr><br>
  ${printCard(pTwo)}<hr>`
);

// document.getElementById('main').innerHTML = display(...dealCards(getDeck()));
