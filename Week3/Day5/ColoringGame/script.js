// ==========================================================
// Week 3 - Day 5 - Mini Project : Coloring Squares
// ==========================================================
const COLORS = [
  "red", "orangered", "orange", "yellow", "yellowgreen", "green",
  "lightseagreen", "deepskyblue", "blue", "indigo", "violet", "hotpink",
  "brown", "gray", "black", "white", "pink", "gold",
];
const ROWS = 30;
const COLUMNS = 40;

const palette = document.getElementById("palette");
const board = document.getElementById("board");
const current = document.getElementById("current");

let selectedColor = "black";
let isDrawing = false;

// --- the grid of colors ---
for (const color of COLORS) {
  const swatch = document.createElement("div");
  swatch.classList.add("color");
  swatch.style.backgroundColor = color;
  swatch.addEventListener("click", () => {
    selectedColor = color;
    document.querySelectorAll(".color").forEach((c) => c.classList.remove("selected"));
    swatch.classList.add("selected");
    current.style.backgroundColor = color;
  });
  palette.appendChild(swatch);
}
current.style.backgroundColor = selectedColor;

// --- the grid of blank squares ---
for (let i = 0; i < ROWS * COLUMNS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.appendChild(square);
}

// --- drawing: mousedown starts, mouseover paints, mouseup stops ---
function paint(target) {
  if (target.classList.contains("square")) {
    target.style.backgroundColor = selectedColor;
  }
}

board.addEventListener("mousedown", (event) => {
  isDrawing = true;
  paint(event.target);
});

board.addEventListener("mouseover", (event) => {
  if (isDrawing) {
    paint(event.target);
  }
});

// mouseup on the whole document, in case the mouse is released outside the board
document.addEventListener("mouseup", () => {
  isDrawing = false;
});

document.getElementById("clear").addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((s) => (s.style.backgroundColor = "white"));
});
