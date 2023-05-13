let markHt = 1.69;
let markWt = 78;

const johnHt = 1.88;
const johnWt = 95;

const johnBMI = johnWt / johnHt ** 2;
const markBMI = markWt / markHt ** 2;

let markHigherBMI;

if (markBMI > johnBMI) {
  markHigherBMI = true;
} else {
  markHigherBMI = false;
}

console.log(johnBMI);
console.log(markBMI);
console.log(markHigherBMI);
