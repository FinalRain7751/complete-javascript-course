"use strict";

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass /* in kg */: 78,
  height /*in m.*/: 1.69,
  calcBMI: function () {
    this.BMI = Number((this.mass / this.height ** 2).toFixed(2));
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass /* in kg */: 92,
  height /*in m.*/: 1.95,
  calcBMI: function () {
    this.BMI = Number((this.mass / this.height ** 2).toFixed(2));
    return this.BMI;
  },
};

let higher;
let lower;

if (john.calcBMI() > mark.calcBMI()) {
  higher = john;
  lower = mark;
} else if (mark.BMI > john.BMI) {
  higher = mark;
  lower = john;
} else {
  console.log(`John and Mark have the same BMI (${mark.BMI}).`);
}

console.log(
  `${higher.firstName}'s BMI (${higher.BMI}) is higher than ${lower.firstName}'s (${lower.BMI}).`
);
