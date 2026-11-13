// ==========================================================
// Week 4 - Day 2 - Exercises XP
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Scope (predictions)
// ----------------------------------------------------------
// #1 funcOne()
//   -> alert "inside the funcOne function 3"
//   `a` is declared with let inside the function (value 5), then the if
//   block reassigns it to 3 because 5 > 1.
// #1.2 With const: TypeError "Assignment to constant variable"
//   when the code tries to do a = 3.
//
// #2 funcThree(), funcTwo(), funcThree()
//   -> "inside the funcThree function 0" then "inside the funcThree function 5"
//   `a` is a global variable. funcTwo reassigns the global `a` to 5, so the
//   second call of funcThree sees the new value.
// #2.2 With const: funcThree() shows 0, then funcTwo() throws a TypeError
//   (cannot reassign a constant), so the global value stays 0.
//
// #3 funcFour(), funcFive()
//   -> "inside the funcFive function hello"
//   funcFour creates a property `a` on the window object (a global variable),
//   funcFive reads that global `a`.
//
// #4 funcSix()
//   -> "inside the funcSix function test"
//   The `a` declared inside the function shadows the global `a` (1).
// #4.2 With const: same result ("test"), because the inner variable is a new
//   variable in the function scope and is never reassigned.
//
// #5
//   -> "in the if block 5" then "outside of the if block 2"
//   let is block scoped: the `a` inside the if block is a different variable.
// #5.2 With const: same result, both variables are block scoped and never
//   reassigned.

// ----------------------------------------------------------
// Exercise 2 : Ternary operator
// ----------------------------------------------------------
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); // 10

// ----------------------------------------------------------
// Exercise 3 : Is it a string ?
// ----------------------------------------------------------
const isString = (value) => typeof value === "string";

console.log(isString("hello")); // true
console.log(isString([1, 2, 4, 0])); // false

// ----------------------------------------------------------
// Exercise 4 : Find the sum
// ----------------------------------------------------------
const sum = (a, b) => a + b;
console.log(sum(3, 4)); // 7

// ----------------------------------------------------------
// Exercise 5 : Kg and grams
// ----------------------------------------------------------
// Function declaration
function kgToGrams(kg) {
  return kg * 1000;
}
console.log(kgToGrams(2)); // 2000

// Function expression
const kgToGramsExpression = function (kg) {
  return kg * 1000;
};
console.log(kgToGramsExpression(3)); // 3000

// Difference: a function declaration is hoisted (can be called before it is defined), a function expression is not.

// One line arrow function
const kgToGramsArrow = (kg) => kg * 1000;
console.log(kgToGramsArrow(4)); // 4000

// ----------------------------------------------------------
// Exercise 6 : Fortune teller
// ----------------------------------------------------------
(function (children, partner, location, job) {
  const p = document.createElement("p");
  p.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  document.getElementById("fortune").appendChild(p);
})(3, "Dana", "Tel Aviv", "web developer");

// ----------------------------------------------------------
// Exercise 7 : Welcome
// ----------------------------------------------------------
(function (userName) {
  const navbar = document.getElementById("navbar");
  const div = document.createElement("div");
  div.classList.add("user");

  const img = document.createElement("img");
  img.src = `https://ui-avatars.com/api/?name=${userName}&background=0D8ABC&color=fff`;
  img.alt = `${userName} profile picture`;

  const span = document.createElement("span");
  span.textContent = `Welcome, ${userName}`;

  div.append(img, span);
  navbar.appendChild(div);
})("John");

// ----------------------------------------------------------
// Exercise 8 : Juice Bar
// ----------------------------------------------------------
// Part I
function makeJuice(size) {
  function addIngredients(first, second, third) {
    const p = document.createElement("p");
    p.textContent = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}.`;
    document.getElementById("juice").appendChild(p);
  }
  addIngredients("apple", "carrot", "ginger");
}
makeJuice("medium");

// Part II
function makeJuice2(size) {
  const ingredients = [];

  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
  }

  function displayJuice() {
    const p = document.createElement("p");
    p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    document.getElementById("juice").appendChild(p);
  }

  addIngredients("apple", "carrot", "ginger");
  addIngredients("orange", "lemon", "mint");
  displayJuice();
}
makeJuice2("large");
