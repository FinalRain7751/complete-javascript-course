'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// Never do this
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// 1. New empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// const souransu = new Person('Souransu', 1992);
// console.log(souransu);

// console.log(souransu instanceof Person);

// // Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// souransu.calcAge();

// console.log(souransu.__proto__);

// console.log(Person.prototype.isPrototypeOf(Person));
// console.log(Person.prototype.isPrototypeOf(souransu));

// Person.prototype.species = 'Homo sapiens';

// console.log(souransu);
// console.log(souransu.species);

// console.log(souransu.hasOwnProperty('calcAge'));
// console.log(souransu.hasOwnProperty('firstName'));
// console.log(souransu.hasOwnProperty('species'));

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

// const Car = function (str) {
//   const [make, , , speed] = str.split(' ');
//   this.make = make;
//   this.speed = Number(speed);
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const carBMW = new Car("'BMW' going at 120 km/h");
// const carMerc = new Car("'Mercedes' going at 95 km/h");

// carBMW.accelerate();
// carBMW.accelerate();
// carBMW.accelerate();
// carBMW.brake();
// carBMW.brake();

// carMerc.accelerate();
// carMerc.accelerate();
// carMerc.accelerate();
// carMerc.brake();
// carMerc.brake();

//////////////////////////////

// CLass expression

// const PersonCl = class {}

// Class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to the prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`{name} is not full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.fullName);

// const walter = new PersonCl('Walter White', 1967);

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     this.print_speed();
//   }

//   brake() {
//     this.speed -= 5;
//     this.print_speed();
//   }

//   print_speed() {
//     console.log(`'${this.make}' going at ${this.speed} km/h.`);
//   }

//   get speedUS() {
//     return (this.speed / 1.6).toFixed(2);
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// const car3 = new Car('Ford', 120);

// car3.accelerate();
// car3.accelerate();
// car3.accelerate();
// car3.accelerate();
// car3.brake();
// car3.brake();
// car3.brake();

// console.log(car3.speedUS);

// car3.speedUS = 100;
// car3.print_speed();
