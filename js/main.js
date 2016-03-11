'use strict';
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

const shuffleDeck = (deck) => _.shuffle(deck);

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

console.log(getDeck());
console.log(shuffleDeck(getDeck()));
console.log(dealCards(getDeck()));

const display = (deck) => {
  let print = '';
  for (var card of deck) {
    (card.includes('♥') || card.includes('♦'))
    ? print += ' <span class="redSuit">' + card + '</span>'
    : print += ' <span class="blkSuit">' + card + '</span>';
  }

  return print;
};

document.getElementById('main').innerHTML = display(shuffleDeck(getDeck()));
