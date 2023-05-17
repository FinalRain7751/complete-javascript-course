'use strict';

const temp_1 = [17, 21, 23];
const temp_2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let statement = '... ';
  for (let i = 0; i < arr.length; i++) {
    statement += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return statement;
}

console.log(printForecast(temp_1));
console.log(printForecast(temp_2));
