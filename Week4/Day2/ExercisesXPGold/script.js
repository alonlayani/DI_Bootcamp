// ==========================================================
// Week 4 - Day 2 - Exercises XP Gold
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Nested functions
// ----------------------------------------------------------
// Prediction: "____/''''\____"
// flat(4) adds 4 underscores, mountain(4) adds "/", 4 quotes and "\",
// then flat(4) adds 4 more underscores. The inner functions can modify
// `result` because they are closures over the outer function scope.

const landscape = () => {
  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape()); // ____/''''\____

// ----------------------------------------------------------
// Exercise 2 : Closure
// ----------------------------------------------------------
// Prediction: 13
// addTo(10) returns a function that remembers x = 10 (closure),
// calling it with 3 returns 10 + 3.
const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); // 13

// ----------------------------------------------------------
// Exercise 3 : Currying
// ----------------------------------------------------------
// Prediction: 31
const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1)); // 31

// ----------------------------------------------------------
// Exercise 4 : Currying
// ----------------------------------------------------------
// Prediction: 17
const add5 = curriedSum(5);
console.log(add5(12)); // 17

// ----------------------------------------------------------
// Exercise 5 : Composing
// ----------------------------------------------------------
// Prediction: 16
// compose(add1, add5)(10) = add1(add5(10)) = add1(15) = 16
const compose = (f, g) => (a) => f(g(a));
const addOne = (num) => num + 1;
const addFive = (num) => num + 5;
console.log(compose(addOne, addFive)(10)); // 16
