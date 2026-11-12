// ==========================================================
// Week 3 - Day 2 - Daily Challenge: Words in the stars
// ==========================================================
function frame(words) {
  const longest = Math.max(...words.map((word) => word.length));
  const border = "*".repeat(longest + 4);
  const lines = [border];
  for (const word of words) {
    lines.push(`* ${word.padEnd(longest)} *`);
  }
  lines.push(border);
  return lines.join("\n");
}

const input = prompt("Enter several words separated by commas:");
const words = input.split(",").map((word) => word.trim()).filter((word) => word !== "");
console.log(frame(words));
