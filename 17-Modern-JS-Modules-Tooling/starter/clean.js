const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getCleanUser = user => user.toLowerCase();

const getLimit = (user, limits) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  value,
  description,
  limits,
  user = 'jonas'
) {
  const cleanUser = getCleanUser(user);

  const limit = getLimit(cleanUser, limits);

  if (value <= limit) {
    return [...state, { value: -value, description, cleanUser }];
  }
};
const newBudeget1 = addExpense(budget, 10, 'Pizza 🍕', spendingLimits);
const newBudeget2 = addExpense(
  newBudeget1,
  100,
  'Pizza 🍕',
  spendingLimits,
  'Matilda'
);
console.log(budget);

const checkExpenses = function (state, limits, user) {
  return state.map(entry => {
    return entry.value < -getLimit(getCleanUser(user), limits)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

console.log(budget);

const logBigExpenses = function (state, limits, user) {
  console.log(
    state
      .filter(entry => entry.value <= -getLimit(user, limits))
      .map(entry => entry.description.slice(-2))
      .join(' /')
  );
};

logBigExpenses(budget, spendingLimits, 'jonas');
