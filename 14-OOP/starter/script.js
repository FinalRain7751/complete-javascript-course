'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// 1. New empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const souransu = new Person('Souransu', 1992);
console.log(souransu);

console.log(souransu instanceof Person);

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

souransu.calcAge();

console.log(souransu.__proto__);

console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(souransu));

Person.prototype.species = 'Homo sapiens';

console.log(souransu);
console.log(souransu.species);

console.log(souransu.hasOwnProperty('calcAge'));
console.log(souransu.hasOwnProperty('firstName'));
console.log(souransu.hasOwnProperty('species'));

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (str) {
  const [make, , , speed] = str.split(' ');
  this.make = make;
  this.speed = Number(speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const carBMW = new Car("'BMW' going at 120 km/h");
const carMerc = new Car("'Mercedes' going at 95 km/h");

carBMW.accelerate();
carBMW.accelerate();
carBMW.accelerate();
carBMW.brake();
carBMW.brake();

carMerc.accelerate();
carMerc.accelerate();
carMerc.accelerate();
carMerc.brake();
carMerc.brake();
