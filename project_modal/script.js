'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Shows Modal
const showModalButtons = document.querySelectorAll('.show-modal');
for (let button of showModalButtons) {
  button.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Closes Modal
const closeModalButton = document.querySelector('.close-modal');
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}
