'use strict';

let dice = document.querySelector('.dice');
let totalScoreP1 = document.querySelector('#score--0');
let totalScoreP2 = document.querySelector('#score--1');
let currentScoreP1 = document.querySelector('#current--0');
let currentScoreP2 = document.querySelector('#current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

totalScoreP1.textContent = 0;
totalScoreP2.textContent = 0;
let curScore = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let player = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (totalScore1 < 100 && totalScore2 < 100) {
    const randDice = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randDice}.png`;
    if (randDice !== 1) {
      curScore += randDice;
      player1.classList.contains('player--active')
        ? (currentScoreP1.textContent = curScore)
        : (currentScoreP2.textContent = curScore);
    } else if (player1.classList.contains('player--active')) {
      curScore = 0;
      currentScoreP1.textContent = curScore;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      curScore = 0;
      currentScoreP2.textContent = curScore;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (totalScore1 < 100 && totalScore2 < 100) {
    if (player1.classList.contains('player--active')) {
      totalScore1 += curScore;
      totalScoreP1.textContent = totalScore1;
      curScore = 0;
      currentScoreP1.textContent = curScore;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      totalScore2 += curScore;
      totalScoreP2.textContent = totalScore2;
      curScore = 0;
      currentScoreP2.textContent = curScore;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
  if (totalScore1 >= 100) {
    player1.classList.add('player--winner');
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
  if (totalScore2 >= 100) {
    player2.classList.add('player--winner');
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  curScore = 0;
  totalScore1 = 0;
  totalScore2 = 0;

  currentScoreP1.textContent = curScore;
  currentScoreP2.textContent = curScore;
  totalScoreP1.textContent = totalScore1;
  totalScoreP2.textContent = totalScore2;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
});
