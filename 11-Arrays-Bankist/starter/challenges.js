'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaSliced = dogsJulia.slice(1, -2);
//   const allDogs = [...dogsJuliaSliced, ...dogsKate];

//   allDogs.forEach(function (age, i) {
//     const message =
//       age > 3 ? `is an adult, and is ${age} years old` : `is still a puppy 🐶`;

//     console.log(`Dog number ${i + 1} ${message}.`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUSD = 1.1;

// const movementsUSD = movements.map(mov => mov * euroToUSD);
// console.log(movementsUSD);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} $${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescription);

// FIlTER

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// Reduce method

// const balance = movements.reduce(
//   (accumulator, curr, i, arr) => accumulator + curr,
//   0
// );
// console.log(balance);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (dogAges) {
//   return dogAges
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((sum, age, i, arr) => sum + age / arr.length, 0);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = dogAges =>
//   dogAges
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((sum, age, i, arr) => sum + age / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// console.log([1, 2, 3, 4]);
// console.log(new Array(1, 2));

// const x = new Array(7);
// console.log(x);

// console.log(x);

// x.fill(1, 3, 8);
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// Array methods Practice
// Array methods Practice
// 1.

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements.filter(mov => mov > 0))
//   .reduce((acc, mov) => acc + mov);

// console.log(bankDepositSum);

// // 2.

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov, i) => (mov >= 1000 ? ++acc : acc), 0);

// console.log(numDeposits1000);

// // 3.

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (acc, mov) => {
//       mov > 0 ? (acc.deposits += 1) : (acc.withdrawals += 1);
//       return acc;
//     },
//     {
//       deposits: 0,
//       withdrawals: 0,
//     }
//   );

// console.log(sums);

// // 4
// // Convert to title case

// const toTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const tilteCase = title
//     .toLowerCase()
//     .split(' ')
//     .reduce((acc, word, i) => {
//       const first = word[0].toUpperCase();
//       const others = word.slice(1);
//       if (i === 0) return acc + first + others + ' ';
//       if (exceptions.includes(word)) return acc + word + ' ';
//       else {
//         return acc + first + others + ' ';
//       }
//     }, '');
//   return tilteCase.trim();
// };

// console.log(toTitleCase('a is a LONG title but Not that lONG'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const isEatingOkay = dog =>
  dog.curFood > 0.9 * dog.recommendedFood &&
  dog.curFood < 1.1 * dog.recommendedFood;

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.

console.log(isEatingOkay(dogs.find(dog => dog.owners.includes('Sarah'))));

// 3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > 1.1 * dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < 0.9 * dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.

console.log(dogs.some(dog => isEatingOkay(dog)));

// 7.

const dogsEatingOkayFood = dogs.filter(dog => isEatingOkay(dog));
console.log(dogsEatingOkayFood);

// 8.

const dogsSortedByRecommendedFood = dogs
  .slice()
  .sort((dog_a, dog_b) => dog_a.recommendedFood - dog_b.recommendedFood);

console.log(dogsSortedByRecommendedFood);
