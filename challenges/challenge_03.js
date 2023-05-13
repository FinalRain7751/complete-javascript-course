// Primary challenge data
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// Bonus 1 Data
const averageScoreDolphins = (97 + 112 + 81) / 3;
const averageScoreKoalas = (109 + 95 + 86) / 3;

// Bonus 2 data
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 106) / 3;

// Main logic
if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log(`Dolphins won!(${averageScoreDolphins})`);
} else if (
  averageScoreKoalas > averageScoreDolphins &&
  averageScoreKoalas >= 100
) {
  console.log(`Koalas won!(${averageScoreKoalas})`);
} else {
  if (averageScoreDolphins >= 100) {
    console.log(`It's a draw(${averageScoreDolphins})😑`);
  } else {
    console.log(`No one gets the trophy!`);
  }
}
