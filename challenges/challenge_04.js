// Test data bill values: 275, 40, 430

const bill = 430;
tip_percent = 15;
if (bill < 50 || bill > 300) {
  tip_percent = 20;
}
const tip = Number(((tip_percent / 100) * bill).toFixed(2));
const total_value = bill + tip;

console.log(
  `The bill was $${bill}, the tip was $${tip}, and the total value $${total_value}. `
);
