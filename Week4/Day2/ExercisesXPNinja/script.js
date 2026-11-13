// ==========================================================
// Week 4 - Day 2 - Exercises XP Ninja
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Merge Words (currying)
// ----------------------------------------------------------
const mergeWords = (string) => (nextString) =>
  nextString === undefined ? string : mergeWords(`${string} ${nextString}`);

console.log(mergeWords("Hello")()); // 'Hello'
console.log(mergeWords("There")("is")("no")("spoon.")()); // 'There is no spoon.'
