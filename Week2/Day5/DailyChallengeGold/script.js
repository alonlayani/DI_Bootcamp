// ==========================================================
// Week 2 - Day 5 - Daily Challenge GOLD: Bubble Sort
// ==========================================================
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// toString(): elements separated by commas
console.log(numbers.toString()); // 5,0,9,1,7,4,2,6,3,8

// join() with different separators
console.log(numbers.join("+")); // 5+0+9+1+7+4+2+6+3+8
console.log(numbers.join(" ")); // 5 0 9 1 7 4 2 6 3 8
console.log(numbers.join(""));  // 5091742638

// Bonus: Bubble Sort in DESCENDING order, with nested for loops
for (let i = 0; i < numbers.length - 1; i++) {
  // after each pass, the smallest remaining number "bubbles" to the end
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      // swap using a temporary variable
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
  console.log(`After pass ${i + 1}:`, numbers);
}

console.log(numbers); // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
