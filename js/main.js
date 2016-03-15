'use strict';

// Creates deck of 52 cards
let deck = []; let discard = []; let pOne = []; let pTwo = [];

const getDeck = () => {
  const numVal = _.range(2, 11).map(String);
  const faceVal = ['J', 'Q', 'K', 'A'];
  const value = numVal.concat(faceVal);
  const suits = ['♠', '♥', '♣', '♦'];
  for (var suit of suits) {
    const cards = value.map(val => val + suit);
    deck.push(cards);
  }

  // todo : add jokers

  deck = _.flatten(deck);
  deck = shuffleDeck(deck);
  return deck;
};

// Randomly orders an array
const shuffleDeck = (deck) => _.shuffle(deck);

// Adds an element to an array.
const addCard = (card, hand) => (hand.push(card));

// Removes a specfied element from an array.
const removeCard = (deck, card) => {
  const index = deck.indexOf(card);
  (index > -1) ? deck.splice(index, 1) : stop;
};

// Adds an element to an array and removes element from origin
const takeCard = (deck, card, hand) => {
  addCard(card, hand);
  removeCard(deck, card);
};

// todo : takeDiscardedCard

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

  deck = deck.slice(11, 52);
  return [deck, discard, pOne, pTwo];
};

// A conditional that returns a string for styling the color.
const suitColor = (card) => {
  let color = '';
  (card.includes('♥') || card.includes('♦'))
  ? color = 'red' : color = 'blk';
  return color;
};

// parses a card into an integer value and a string suit
const cardValue = (card) => {
  let value = [];
  let num = parseInt(card, 10);
  (isNaN(num)) ? num = 10 : stop;
  let suit = card.slice(-1);
  value.push(num, suit);
  return value;
};

// sorts integer cardValue for handValue()
const countCards = (cardValue) => {
  let total = 0;
  (Number.isInteger(cardValue)) ? total += cardValue : stop;
  return total;
};

// Calculates the integer value of a specfied array
const handValue = (hand) => (
  _.flatten(hand.map(cardValue))
  .map(countCards)
  .reduce((a, b) => (a + b), 0)
);

//console.log(getDeck());
//console.log(shuffleDeck(getDeck()));
//console.log(dealCards(getDeck()));

const printCard = (card) => {
  console.log(...cardValue(card));
  return `<span class="${suitColor(card)}Suit">${card}</span>`;
};

const display = (deck, discard, pOne, pTwo) => (
  `${deck.map(printCard)}<hr><br>
    ${discard.map(printCard)}<hr><br>
    ${pOne.map(printCard)}<hr><br>
    ${pTwo.map(printCard)}<hr>`
);

document.getElementById('main').innerHTML = display(...dealCards(getDeck()));
