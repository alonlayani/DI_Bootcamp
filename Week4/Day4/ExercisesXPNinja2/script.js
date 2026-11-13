// ==========================================================
// Week 4 - Day 4 - Exercises XP Ninja (2)
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Menu
// ----------------------------------------------------------
const menu = [
  { type: "starter", name: "Houmous with Pita" },
  { type: "starter", name: "Vegetable Soup with Houmous peas" },
  { type: "dessert", name: "Chocolate Cake" },
];

// At least one dessert ? (some + ternary)
console.log(menu.some((dish) => dish.type === "dessert") ? "There is a dessert" : "No dessert");

// Are all the dishes starters ? (every)
console.log(menu.every((dish) => dish.type === "starter")); // false

// At least one main course ? If not, add one
if (!menu.some((dish) => dish.type === "main course")) {
  menu.push({ type: "main course", name: "Grilled Salmon with Potatoes" });
}
console.log(menu);

// Add a "vegetarian" key
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

menu.forEach((dish) => {
  const name = dish.name.toLowerCase();
  dish.vegetarian = vegetarian.some((ingredient) => name.includes(ingredient));
});
console.log(menu);

// ----------------------------------------------------------
// Exercise 2 : Chop into chunks
// ----------------------------------------------------------
function string_chop(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}
console.log(string_chop("developers", 2)); // ["de", "ve", "lo", "pe", "rs"]

// ----------------------------------------------------------
// Exercise 3 : You said string ?
// ----------------------------------------------------------
function search_word(text, word) {
  const count = text.split(" ").filter((w) => w === word).length;
  return `'${word}' was found ${count} times.`;
}
console.log(search_word("The quick brown fox", "fox")); // "'fox' was found 1 times."

// ----------------------------------------------------------
// Exercise 4 : Reverse Array (without creating a new array)
// ----------------------------------------------------------
function reverseArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const j = arr.length - 1 - i;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5,4,3,2,1]
console.log(reverseArray([1, 2])); // [2,1]
console.log(reverseArray([])); // []
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [10,...,1]
