"use strict";

// Data 1: Dolphins score: 44, 23, 71 and  Koalas score: 65, 54, 49
// Data 2: Dolphins score: 85, 54, 41 and  Koalas score: 23, 34, 27

const namesOfTeams = {
  1: "Dolphins",
  2: "Koalas",
};

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avg1, avg2, namesOfTeams) {
  let winner;
  let winningScore;
  let losingScore;

  if (avg1 >= 2 * avg2) {
    winner = 1;
    winningScore = avg1;
    losingScore = avg2;
  } else if (avg2 >= 2 * avg1) {
    winner = 2;
    winningScore = avg2;
    losingScore = avg1;
  } else {
    console.log(`No one wins (${avg1} vs ${avg2}).`);
    return;
  }

  console.log(
    `${namesOfTeams[winner]} win (${winningScore} vs. ${losingScore})`
  );
}

checkWinner(avgDolphins, avgKoalas, namesOfTeams);
