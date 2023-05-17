'use strict';

// Functions

const countries = [
  {
    name: 'India',
    population /* in millions */: 1400,
    capitalCity: 'New Delhi',
  },
  {
    name: 'Finland',
    population /* in millions */: 6,
    capitalCity: 'Helsinki',
  },
  {
    name: 'China',
    population /* in millions */: 1300,
    capitalCity: 'Beijing',
  },
  {
    name: 'USA',
    population: 336,
    capitalCity: 'Washington DC',
  },
];

// function describeCountry(country) {
//   return `${country.name} has ${country.population} million people and its capital city is ${country.capitalCity}.`;
// }

// for (let country of countries) {
//   console.log(describeCountry(country));
// }

// // Function Declarations vs Expressions
const worldPopulation = 7900; // in millions

function percentageOfWorld1(population) {
  return Number(((population / worldPopulation) * 100).toFixed(2));
}

// const percentageOfWorld2 = function (population) {
//   return Number(((population / worldPopulation) * 100).toFixed(2));
// };

// for (let country of countries) {
//   console.log(`${country.name}: ${percentageOfWorld2(country.population)}%`);
// }

// Arrow functions

// const percentageOfWorld3 = (population) => {
//   return Number(((population / worldPopulation) * 100).toFixed(2));
// };

// for (let country of countries) {
//   console.log(`${country.name}: ${percentageOfWorld3(country.population)}%`);
// }

// Functions calling other functions

// const describePopulation = (country) => {
//   return `${country.name} has ${
//     country.population
//   } million people, which is about ${percentageOfWorld1(
//     country.population
//   )}% of the world.`;
// };

// for (let country of countries) {
//   console.log(describePopulation(country));
// }

// // Introduction to arrays

const populations = [];
const percentages = [];

for (let country of countries) {
  populations.push(country.population);
  percentages.push(`${percentageOfWorld1(country.population)}%`);
}

// console.log(populations.length === 4);
// console.log(percentages);

// // Basic Array Operations
// let neighbours = ['Nepal', 'Bhutan', 'Sri Lanka', 'China'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop('Utopia');
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Propbably not a central European country 😄');
// }

// neighbours[neighbours.indexOf('China')] = "People's Republic of CHina";
// console.log(neighbours);

// Intro to Objects

const myCountry = {
  country: 'India',
  capital: 'New Delhi',
  language: 'Bengali',
  population: '1400', // in millions
  neighbours: ['Nepal', 'Bhutan', 'Sri Lanka', 'China'],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language.toLowerCase()}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// console.log(myCountry);

// Dot vs Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language.toLowerCase()}-speaking people, ${
//     myCountry.neighbours.length
//   } neighbouring countries and a capital called ${myCountry.capital}.`
// );

// Object Methods

// myCountry.describe();

// myCountry.checkIsIsland();
// console.log(myCountry.isIsland);

// The for loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// Looping Arrays, Breaking and Continuing

let percentages2 = [];
for (let population of populations) {
  percentages2.push(`${percentageOfWorld1(population)}%`);
}
console.log(percentages2);
console.log(percentages);

function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

if (compareArrays(percentages, percentages2)) {
  console.log('True');
} else {
  console.log('False');
}

// Looping backwards ans Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let subList of listOfNeighbours) {
  for (let neighbour of subList) {
    console.log(`Neighbour: ${neighbour}`);
  }
}

// The While Loop

let percentages3 = [];
let indexOfPopulations = 0;
while (indexOfPopulations < populations.length) {
  percentages3.push(`${percentageOfWorld1(populations[indexOfPopulations])}%`);
  indexOfPopulations++;
}

console.log(percentages3);
