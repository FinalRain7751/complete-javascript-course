'use strict';

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// // Higher Order functions
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   // Using methods on functions
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey!');

// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello!')('Souransu');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

// lufthansa.book(239, 'Jonas');
// lufthansa.book(635, 'Souransu');
// // console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// // book(23, 'Bidisha'); // Error

// book.call(eurowings, 23, 'Bidisha');
// // console.log(eurowings);

// book.call(lufthansa, 239, 'Arko');
// // console.log(lufthansa);
// // console.log(eurowings);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Rama');
// // console.log(swiss);

// // Apply method

// const flightData = [583, 'Asok'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
// console.log(swiss);

const bookEW = book.bind(eurowings);
bookEW(23, 'Steve');
// console.log(eurowings);

const bookEW49 = book.bind(eurowings, 49);
bookEW49('Roger');
// console.log(eurowings);

// With eventlisteners

lufthansa.planes = 300;
lufthansa.buyPLane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPLane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPLane.bind(lufthansa));

// Partial application

// const addTax = (taxRate, value) => value + value * taxRate;
// console.log(addTax(0.1, 200));

// const addTaxGST = addTax.bind(null, 0.23);
// console.log(addTaxGST(200));

// Mini challenge

// const addTax = taxRate => {
//   return value => value + value * taxRate;
// };

// const addGST = addTax(0.2);
// const addVAT = addTax(0.23);

// console.log(addTax(0.23)(200));
// console.log(addGST(200));
// console.log(addVAT(200));

//IIFE

// (function () {
//   console.log('This will never run again');
// })();

// (() => {
//   console.log('This willl also never run again');
// })();

// Closure

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker(); // 1 passengers
// booker(); // 2 passengers
// booker(); // 3 passengers

// const booker1 = secureBooking();

// booker1(); // 1 passengers
// booker1(); // 2 passengers
// booker1(); // 3 passengers

// let f;

// const g = () => {
//   const a = 23;
//   f = () => {
//     console.log(a * 2);
//   };
// };

// g();
// f();

// const h = () => {
//   const b = 777;
//   f = () => {
//     console.log(b * 2);
//   };
// };

// h();
// f();

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`Ther are 3 groups, each with ${perGroup}.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);
