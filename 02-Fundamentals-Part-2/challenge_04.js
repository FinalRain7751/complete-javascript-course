"use strict";

let bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

let tips = [];
let totalValue = [];

const calcTip = function (billValue) {
  let tipPercent = 20;
  if (billValue >= 50 && billValue <= 300) {
    tipPercent = 15;
  }

  const tip = Number((billValue * (tipPercent / 100)).toFixed(2));
  return tip;
};

// console.log(calcTip(400));

for (let bill of bills) {
  tips.push(calcTip(bill));
  totalValue.push(calcTip(bill) + bill);
}

console.log(tips);
console.log(totalValue);

// Bonus Challenge

function calcAverage(arr) {
  let sum = 0;
  const numberOfValues = arr.length;
  for (let number of arr) {
    sum += number;
  }
  return sum / numberOfValues;
}

console.log(calcAverage(bills));
