'use strict';

const newGameButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

const player1 = {
  element: document.querySelector('.player--0'),
  currentScore: document.querySelector('#current--0'),
  score: document.querySelector('#score--0'),
};

const player2 = {
  element: document.querySelector('.player--1'),
  currentScore: document.querySelector('#current--1'),
  score: document.querySelector('#score--1'),
};

// Start New Game
resetGame();

// Reset game
newGameButton.addEventListener('click', () => {
  location.reload();
});

// Roll dice
rollDiceButton.addEventListener('click', rollDice);

// Hold
holdButton.addEventListener('click', hold);

function resetGame() {
  resetScores(player1);
  resetScores(player2);
  if (!player1.element.classList.contains('player--active')) {
    player1.classList.add('player--active');
  }
  player2.element.classList.remove('player--active');
}

function resetScores(player) {
  player.score.textContent = 0;
  player.currentScore.textContent = 0;
}

function rollDice() {
  const roll = Math.trunc(Math.random() * (7 - 1) + 1); // Returns a pseudo random integer between 1 and 6
  const diceSourceImageName = `dice-${roll}.png`;
  dice.src = diceSourceImageName;

  // If roll is '1', current score and score resets to zero
  // and active player is changed

  if (player1.element.classList.contains('player--active')) {
    if (roll === 1) {
      resetScores(player1);
      switchPlayer();
    }

    updateCurrentScore(player1.currentScore, roll);
  } else {
    if (roll === 1) {
      resetScores(player2);
      switchPlayer();
    }
    updateCurrentScore(player2.currentScore, roll);
  }
}

// Switch players
function switchPlayer() {
  if (player1.element.classList.contains('player--active')) {
    player1.element.classList.remove('player--active');
    player2.element.classList.add('player--active');
  } else {
    player2.element.classList.remove('player--active');
    player1.element.classList.add('player--active');
  }
}

// Update score
function updateCurrentScore(element, roll) {
  let score = Number(element.textContent);
  if (roll !== 1) {
    score += roll;
  }
  element.textContent = score;
}

function hold() {
  if (player1.element.classList.contains('player--active')) {
    onHold(player1);
  } else {
    onHold(player2);
  }
  switchPlayer();
}

function onHold(player) {
  player.score.textContent =
    Number(player.currentScore.textContent) + Number(player.score.textContent);
  if (Number(player.score.textContent) >= 100) {
    player.score.textContent = 'Wins!';
    rollDiceButton.disabled = 'true';
    holdButton.disabled = 'true';
    return;
  }
  player.currentScore.textContent = 0;
}
