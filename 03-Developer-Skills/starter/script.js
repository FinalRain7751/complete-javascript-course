// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// console.log('Live server set up');

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

console.log(calcTemperatureAmplitude(temperature));

function calcTemperatureAmplitude(arrTemp) {
  const maxTemp = findMaxTemp(arrTemp);
  console.log(`Max Temp.: ${maxTemp}`);

  const minTemp = findMinTemp(arrTemp);
  console.log(`Min Temp.: ${minTemp}`);

  return maxTemp - minTemp;
}

function findMaxTemp(arrTemp) {
  let maxTemp;
  for (let i = 0; i < arrTemp.length; i++) {
    if (arrTemp[i] === 'error') {
      continue;
    }

    if (i === 0) {
      maxTemp = arrTemp[i];
      continue;
    } else {
      if (arrTemp[i] > maxTemp) {
        maxTemp = arrTemp[i];
      }
    }
  }
  return maxTemp;
}

function findMinTemp(arrTemp) {
  let minTemp;
  for (let i = 0; i < arrTemp.length; i++) {
    if (arrTemp[i] === 'error') {
      continue;
    }

    if (i === 0) {
      minTemp = arrTemp[i];
      continue;
    } else {
      if (arrTemp[i] < minTemp) {
        minTemp = arrTemp[i];
      }
    }
  }

  return minTemp;
}
