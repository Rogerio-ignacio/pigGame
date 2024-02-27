'use strict';

let dice = document.querySelector('.dice');
let totalScoreP1 = document.querySelector('#score--0');
let totalScoreP2 = document.querySelector('#score--1');
let currentScoreP1 = document.querySelector('#current--0');
let currentScoreP2 = document.querySelector('#current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

let curScore = 0;
let totalScore = 0;
let player = 0;
document.querySelector('.btn--roll').addEventListener('click', function () {
  const randDice = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randDice}.png`;
  if (randDice !== 1) {
    curScore += randDice;
    player1.classList.contains('player--active')
      ? (currentScoreP1.textContent = curScore)
      : (currentScoreP2.textContent = curScore);
  } else if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {});
document.querySelector('.btn--new').addEventListener('click', function () {});
