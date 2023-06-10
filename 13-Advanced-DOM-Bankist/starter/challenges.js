// 'use strict';

// // Lectures

// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);

// // console.log(document.getElementById('section--1'));

// // const allButtons = document.getElementsByTagName('a');
// // console.log(allButtons);

// const header = document.querySelector('.header');

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   "We use cookies for improved functionality and analytics. <button class='btn btn--close--cookie'>Got it!</button>";

// // header.append(message);

// header.before(message);
// // header.after(message);

// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.width);
// console.log(getComputedStyle(message).fontSize);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// // console.log(message.style.height);

// // Manipulating CSS custom properties

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.designer);

// logo.alt = 'Beautiful minimalist logo';

// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src'));

// console.log(logo.getAttribute('designer'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data Attributes
// console.log(logo.dataset.versionNumber);

// logo.dataset.versionNumber = '3.8';
// console.log(logo.dataset.versionNumber);

// // Classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // Dont use
// logo.className = 'jonas';

// Event listeners

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Great!');
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('Great!');
// };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener(
//   'click',
//   function (e) {
//     console.log('LINK', e.target);
//     this.style.backgroundColor = randomColor();

//   Stop propagation
// e.stopPropagation();
//   }
// Capturing phase activated
//   true
// );

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('CONTAINER', e.target);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('NAV', e.target);
//   this.style.backgroundColor = randomColor();
// });

// DOM traversal
// const h1 = document.querySelector('h1');

// Going downwards

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'red';

// // Going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-secondary)';

// Going sideways : Siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.color = 'orange';
//   }
// });
