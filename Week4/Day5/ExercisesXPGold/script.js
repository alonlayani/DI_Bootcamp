// ==========================================================
// Week 4 - Day 5 - Exercises XP Gold
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : print Full Name
// ----------------------------------------------------------
const printFullName = ({ first, last }) => `Your full name is ${first} ${last}`;
console.log(printFullName({ first: "Elie", last: "Schoppik" })); // 'Your full name is Elie Schoppik'

// ----------------------------------------------------------
// Exercise 2 : keys and values
// ----------------------------------------------------------
function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map((key) => obj[key]);
  return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// ----------------------------------------------------------
// Exercise 3 : Counter class
// ----------------------------------------------------------
// Output: 3
// counterTwo is not a new Counter, it is a reference to the same object as
// counterOne. 2 increments + 1 increment on the same object = 3.
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count); // 3
