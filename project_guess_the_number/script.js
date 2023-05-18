'use strict';

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20 + 1);
  // Generates a random integer between 1 and 20
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = generateSecretNumber();

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  if (
    document.querySelector('.message').textContent === '🎉 Correct number' ||
    document.querySelector('.message').textContent === 'Game Over.'
  ) {
    return;
  }

  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number...😑';
    return;
  }

  if (secretNumber === guess) {
    onCorrectGuess();
    return;
  } else if (guess > secretNumber) {
    onWrongGuess('Too high');
  } else {
    onWrongGuess('Too low');
  }

  if (score === 0) {
    displayMessage('Game Over.');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  reset();
});

function reset() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  secretNumber = generateSecretNumber();

  console.log(secretNumber);
}

function onCorrectGuess() {
  displayMessage('🎉 Correct number');
  document.querySelector('body').style.backgroundColor = 'limegreen';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  score++;
  if (score > highscore) {
    highscore = score;
  }
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
}

function onWrongGuess(message) {
  displayMessage(message);
  score--;
  document.querySelector('.score').textContent = score;
}
