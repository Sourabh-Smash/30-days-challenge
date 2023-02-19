'use strict';
// selecting Elements
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const current0Elem = document.querySelector('#current--0');
const current1Elem = document.querySelector('#current--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

// Rolling dice Functionality
btnroll.addEventListener('click', () => {
  if (playing) {
    // 1 generating random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2 display dice
    diceElem.src = `imgs/dice-${dice}.png`;
    diceElem.classList.remove('hidden');

    //check if rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  // 1. add current score to active player score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player score is >=100
    if (scores[activePlayer] >= 20) {
      // finish the game
      playing = false;
      diceElem.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  diceElem.classList.add('hidden');
  player0Elem.classList.remove('player--winner');
  player1Elem.classList.remove('player--winner');
  player0Elem.classList.add('player--active');
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;
});
