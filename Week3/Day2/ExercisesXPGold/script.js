// ==========================================================
// Week 3 - Day 2 - Exercises XP Gold
// ==========================================================

// Exercise 1 : is_Blank
const isBlank = (str) => str.trim().length === 0;
console.log(isBlank(""));    // true
console.log(isBlank("abc")); // false

// Exercise 2 : Abbrev_name
const abbrevName = (name) => {
  const [first, last] = name.split(" ");
  return `${first} ${last[0]}.`;
};
console.log(abbrevName("Robin Singh")); // "Robin S."

// Exercise 3 : SwapCase
const swapCase = (str) =>
  [...str].map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("");
console.log(swapCase("The Quick Brown Fox")); // tHE qUICK bROWN fOX

// Exercise 4 : Omnipresent value
const isOmnipresent = (arr, value) => arr.every((sub) => sub.includes(value));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false

// Exercise 5 : Red table -> see index.html
