const country = "India";
const continent = "Asia";
let populationInMillions = 1400;

console.log(country, continent, populationInMillions);

const isIsland = false;
let language;
language = "Bangla";
// country = "China"; Assignment to const variable cannot be done

console.log(
  typeof isIsland,
  typeof populationInMillions,
  typeof country,
  typeof language
);

let halfPopulation = populationInMillions / 2;

populationInMillions++;

console.log(populationInMillions);
let populationOfFinland = 6;

if (populationInMillions > populationOfFinland) {
  console.log("yes");
}

let averagePopulation = 33;
if (populationInMillions > averagePopulation) {
  console.log("yes");
}

let description = `${country} is in ${continent}, and its ${populationInMillions} million people speak ${language}.`;

console.log(description);

if (populationInMillions > averagePopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - populationInMillions
    } million below average.`
  );
}

// Type conversion and Coercion

// Predict the result of these 5 operations without executing them:
// '9' - '5'; 4
// '19' - '13' + '17'; '617'
// '19' - '13' + 17; 23
// '123' < 57; false
// 5 + 6 + '4' + 9 - 4 - 2; 117 Got this wrong. Correct answer -> 1143
// 2. Execute the operations to check if you were right

// Equality operators

// const numNeighbours = Number(
//   prompt("How many neighbouring countries does your country have? ")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border.");
// } else {
//   console.log("No borders.");
// }

// Logical Operators

const goodForSarah =
  language === "English" && populationInMillions < 50 && isIsland;

if (goodForSarah) {
  console.log(`You should live in ${country} 😀.`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

// The switch statement

// let spoken_language = [
//   "chinese",
//   "mandarin",
//   "spanish",
//   "english",
//   "hindi",
//   "arabic",
// ];

// const spoken_lang = prompt("What is your spoken language? ");

// switch (spoken_lang) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers.");
//     break;
//   case "english":
//     console.log("3rd place.");
//     break;
//   case "hindi":
//     console.log("Number 4.");
//     break;
//   case "arabic":
//     console.log("5th most spoken language.");
//     break;
//   default:
//     console.log("Great language too 😊");
// }

// TERNARY OPERATOR

const is_greater = populationInMillions > 33 ? "above" : "below";
console.log(`${country}'s population is ${is_greater} average.`);
