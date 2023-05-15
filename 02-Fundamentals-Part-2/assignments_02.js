"use strict";

// Functions

const countries = [
  {
    name: "India",
    population /* in millions */: 1400,
    capitalCity: "New Delhi",
  },
  {
    name: "Finland",
    population /* in millions */: 6,
    capitalCity: "Helsinki",
  },
  {
    name: "China",
    population /* in millions */: 1300,
    capitalCity: "Beijing",
  },
  {
    name: "USA",
    population: 336,
    capitalCity: "Washington DC",
  },
];

function describeCountry(country) {
  return `${country.name} has ${country.population} million people and its capital city is ${country.capitalCity}.`;
}

for (let country of countries) {
  console.log(describeCountry(country));
}

// Function Declarations vs Expressions
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

const describePopulation = (country) => {
  return `${country.name} has ${
    country.population
  } million people, which is about ${percentageOfWorld1(
    country.population
  )}% of the world.`;
};

for (let country of countries) {
  console.log(describePopulation(country));
}

// Introduction to arrays

const populations = [];
const percentages = [];

for (let country of countries) {
  populations.push(country.population);
  percentages.push(`${percentageOfWorld1(country.population)}%`);
}

console.log(populations.length === 4);
console.log(percentages);

// Basic Array Operations
