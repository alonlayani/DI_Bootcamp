// ===== Exercise 2 : Ternary operator =====
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); // 10

// ===== Exercise 3 : Is it a string ? =====
const isString = (value) => typeof value === "string";
console.log(isString("hello"));      // true
console.log(isString([1, 2, 4, 0])); // false

// ===== Exercise 4 : Find the sum =====
const sum = (a, b) => a + b;
console.log(sum(4, 6)); // 10

// ===== Exercise 5 : Kg and grams =====
// Function declaration
function kgToGramsDeclaration(kg) {
  return kg * 1000;
}
console.log(kgToGramsDeclaration(2)); // 2000

// Function expression
const kgToGramsExpression = function (kg) {
  return kg * 1000;
};
console.log(kgToGramsExpression(3)); // 3000

// Difference: a declaration is hoisted (can be called before it's defined), an expression is not (it exists only after the assignment runs).

// One-line arrow function
const kgToGrams = (kg) => kg * 1000;
console.log(kgToGrams(1.5)); // 1500

// ===== Exercise 6 : Fortune teller =====
(function (children, partner, location, job) {
  const p = document.createElement("p");
  p.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  document.getElementById("fortune").appendChild(p);
})(3, "Dana", "Tel Aviv", "full-stack developer");

// ===== Exercise 7 : Welcome =====
(function (userName) {
  const navbar = document.getElementById("navbar");
  const userDiv = document.createElement("div");
  userDiv.classList.add("user");

  const img = document.createElement("img");
  img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random`;
  img.alt = `${userName} profile picture`;

  const span = document.createElement("span");
  span.textContent = `Welcome, ${userName}`;

  userDiv.append(img, span);
  navbar.appendChild(userDiv);
})("John");

// ===== Exercise 8 : Juice Bar =====
// Part I
function makeJuiceOne(size) {
  function addIngredients(first, second, third) {
    const p = document.createElement("p");
    p.textContent = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}.`;
    document.getElementById("juice").appendChild(p);
  }
  addIngredients("apple", "carrot", "ginger");
}
makeJuiceOne("medium");

// Part II
function makeJuice(size) {
  const ingredients = [];

  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
  }

  function displayJuice() {
    const p = document.createElement("p");
    p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    document.getElementById("juice").appendChild(p);
  }

  addIngredients("orange", "mango", "banana");
  addIngredients("strawberry", "kiwi", "mint");
  displayJuice();
}
makeJuice("large");
