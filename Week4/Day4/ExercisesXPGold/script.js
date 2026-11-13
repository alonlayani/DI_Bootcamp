// ==========================================================
// Week 4 - Day 4 - Exercises XP Gold
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Analyzing the map method
// ----------------------------------------------------------
// Output: [2, 4, 6]
// Every element is a number, so each one is multiplied by 2.
// (If an element was not a number, `return;` would give undefined.)
console.log(
  [1, 2, 3].map((num) => {
    if (typeof num === "number") return num * 2;
    return;
  })
);

// ----------------------------------------------------------
// Exercise 2 : Analyzing the reduce method
// ----------------------------------------------------------
// Output: [1, 2, 0, 1, 2, 3]
// The accumulator starts at [1, 2], then concat [0, 1], then concat [2, 3].
console.log(
  [[0, 1], [2, 3]].reduce((acc, cur) => acc.concat(cur), [1, 2])
);

// ----------------------------------------------------------
// Exercise 3 : Analyze this code
// ----------------------------------------------------------
// `i` is the index of the current element: 0, 1, 2, 3, 4, 5.
// (alert removed so the file can also run in Node)
const arrayNum = [1, 2, 4, 5, 8, 9];
const doubled = arrayNum.map((num, i) => {
  console.log(num, i);
  return num * 2;
});
console.log(doubled);

// ----------------------------------------------------------
// Exercise 4 : Nested arrays
// ----------------------------------------------------------
// 1. [[1],[2],[3],[[[4]]],[[[5]]]] -> [1,2,3,[4],[5]]  (one line)
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
console.log(array.flat(2)); // [1, 2, 3, [4], [5]]

// 2. greeting -> ["Hello young grasshopper!","you are","learning fast!"]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const sentences = greeting.map((words) => words.join(" "));
console.log(sentences);

// 3. -> 'Hello young grasshopper! you are learning fast!'
console.log(sentences.join(" "));

// 4. trapped number -> [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity)); // [3]
