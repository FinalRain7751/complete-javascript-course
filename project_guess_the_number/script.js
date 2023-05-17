'use strict';

const number = Math.trunc(Math.random() * 20 + 1); // Generates a random integer between 1 and 20

// console.log(number);
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number...😑';
    return;
  }

  if (number === guess) {
    document.querySelector('.message').textContent = '🎉 Correct number';
  } else if (guess > number) {
    document.querySelector('.message').textContent = '';
  }
});
