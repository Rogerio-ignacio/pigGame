'use strict';

const dice = document.querySelector('.dice');
const totalScoreP1 = document.getElementById('score--0');
const totalScoreP2 = document.getElementById('score--1');
const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let curScore, totalScore1, totalScore2;

// FUNCTIONS
const switchPlayer = function () {
  if (player1.classList.contains('player--active')) {
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
};

const verifyPlayerWinner = function () {
  if (totalScore1 >= 100) {
    player1.classList.add('player--winner');
    player2.classList.remove('player--active');
    player1.classList.remove('player--active');
  } else if (totalScore2 >= 100) {
    player2.classList.add('player--winner');
    player1.classList.remove('player--active');
    player2.classList.remove('player--active');
  }
};

const sumTotalScore = function () {
  if (player1.classList.contains('player--active')) {
    totalScore1 += curScore;
    totalScoreP1.textContent = totalScore1;
    switchPlayer();
  } else {
    totalScore2 += curScore;
    totalScoreP2.textContent = totalScore2;
    switchPlayer();
  }
};

const init = function () {
  curScore = 0;
  totalScore1 = 0;
  totalScore2 = 0;

  dice.classList.add('hidden');

  currentScoreP1.textContent = curScore;
  currentScoreP2.textContent = curScore;
  totalScoreP1.textContent = totalScore1;
  totalScoreP2.textContent = totalScore2;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  dice.classList.add('hidden');
};

//METHODS
init();

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (totalScore1 < 100 && totalScore2 < 100) {
    const randDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randDice}.png`;
    if (randDice !== 1) {
      // Add dice to the current score
      curScore += randDice;

      player1.classList.contains('player--active')
        ? (currentScoreP1.textContent = curScore)
        : (currentScoreP2.textContent = curScore);
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (totalScore1 < 100 && totalScore2 < 100) {
    sumTotalScore();
    verifyPlayerWinner();
  }
});

document.querySelector('.btn--new').addEventListener('click', init);
