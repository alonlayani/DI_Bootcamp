// ==========================================================
// Week 3 - Day 2 - Exercises XP (exercises 1 to 4)
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Find the numbers divisible by 23
// Bonus: the divisor is a parameter (default 23)
// ----------------------------------------------------------
function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  const numbers = [];
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers.push(i);
      sum += i;
    }
  }
  console.log(numbers.join(" "));
  console.log(`Sum : ${sum}`);
}

displayNumbersDivisible();    // ... Sum : 5313
displayNumbersDivisible(3);
displayNumbersDivisible(45);

// ----------------------------------------------------------
// Exercise 2 : Shopping List
// ----------------------------------------------------------
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (const item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; // Bonus: decrease the stock
    }
  }
  return total;
}

console.log(`Total bill: $${myBill()}`); // 5.5 (apple is out of stock)

// ----------------------------------------------------------
// Exercise 3 : What's in my wallet ?
// change = [quarters, dimes, nickels, pennies]
// ----------------------------------------------------------
function changeEnough(itemPrice, amountOfChange) {
  const values = [0.25, 0.1, 0.05, 0.01];
  let total = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * values[i];
  }
  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true

// ----------------------------------------------------------
// Exercise 4 : Vacations Costs
// Bonus done: prompts are only inside totalVacationCost()
// ----------------------------------------------------------
function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  if (destination.toLowerCase() === "london") return 183;
  if (destination.toLowerCase() === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95; // 5% discount
  }
  return cost;
}

function askNumber(question) {
  let answer;
  do {
    answer = prompt(question);
  } while (answer === null || answer.trim() === "" || isNaN(Number(answer)));
  return Number(answer);
}

function askString(question) {
  let answer;
  do {
    answer = prompt(question);
  } while (answer === null || answer.trim() === "" || !isNaN(Number(answer)));
  return answer.trim();
}

function totalVacationCost() {
  const nights = askNumber("How many nights would you like to stay in the hotel?");
  const destination = askString("What is your destination?");
  const days = askNumber("How many days would you like to rent the car?");

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  return hotel + plane + car;
}

console.log(`Total vacation cost: $${totalVacationCost()}`);
