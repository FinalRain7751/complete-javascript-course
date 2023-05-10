const country = "India";
const continent = "Asia";
let populationInMillions = 1400;

console.log(country, continent, populationInMillions);

const isIsland = false;
let language;
language = "Bengali";
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
