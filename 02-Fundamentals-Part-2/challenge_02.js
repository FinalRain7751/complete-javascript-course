"use strict";

let bills = new Array(125, 555, 44);
// bills.push(125);
// bills.push(555);
// bills.push(44);
// console.log(bills);

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
