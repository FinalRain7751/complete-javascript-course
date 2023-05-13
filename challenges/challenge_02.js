let markHt = 1.69;
let markWt = 78;

const johnHt = 1.88;
const johnWt = 95;

const johnBMI = johnWt / johnHt ** 2;
const markBMI = markWt / markHt ** 2;

let higherBMI;
let lowerBMI;

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI(${markBMI.toFixed(2)}) is higher than John's(${johnBMI.toFixed(
      2
    )}).`
  );
} else if (johnBMI > markBMI) {
  console.log(
    `John's BMI(${johnBMI.toFixed(2)}) is higher than Mark's(${markBMI.toFixed(
      2
    )}).`
  );
} else {
  console.log(
    `John's BMI(${johnBMI.toFixed(2)}) and Mark's BMI(${markBMI.toFixed(
      2
    )}) are equal.`
  );
}
