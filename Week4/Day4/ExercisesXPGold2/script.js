// ==========================================================
// Week 4 - Day 4 - Exercises XP Gold (2)
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Sum elements
// ----------------------------------------------------------
const sumArray = (arr) => arr.reduce((acc, n) => acc + n, 0);
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// ----------------------------------------------------------
// Exercise 2 : Remove Duplicates
// ----------------------------------------------------------
const removeDuplicates = (arr) => arr.filter((item, i) => arr.indexOf(item) === i);
// (shorter version: [...new Set(arr)])
console.log(removeDuplicates([1, 2, 2, 3, "a", "a", 4, 1])); // [1, 2, 3, 'a', 4]

// ----------------------------------------------------------
// Exercise 3 : Remove certain values
// ----------------------------------------------------------
// null, 0, "", false, undefined and NaN are all "falsy"
const removeFalsy = (arr) => arr.filter(Boolean);
console.log(removeFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null])); // [15, -22, 47]

// ----------------------------------------------------------
// Exercise 4 : Repeat please !
// ----------------------------------------------------------
function repeat(str, n = 1) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
console.log(repeat("Ha!", 3)); // "Ha!Ha!Ha!"
console.log(repeat("Ha!")); // "Ha!"

// ----------------------------------------------------------
// Exercise 5 : Turtle & Rabbit
// ----------------------------------------------------------
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// Line them up with padStart (the start line is 5 spaces before "||")
turtle = turtle.padStart(7);
rabbit = rabbit.padStart(7);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// What happens when you run turtle = turtle.trim().padEnd(9, '=') ?
// trim() removes the spaces before the turtle, then padEnd(9, '=') adds "="
// at the END until the string is 9 characters long.
// The emoji counts as 2 characters, so we get "🐢=======" (7 "=").
// The turtle is no longer lined up: it is back at the left with a trail of "=".
turtle = turtle.trim().padEnd(9, "=");
console.log(turtle); // 🐢=======
