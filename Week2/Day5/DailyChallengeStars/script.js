// ==========================================================
// Week 2 - Day 5 - Daily Challenge: Stars
// ==========================================================

// Version 1: one loop
let line = "";
for (let i = 1; i <= 6; i++) {
  line += "* ";
  console.log(line.trim());
}

// Version 2: two nested loops
for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trim());
}
