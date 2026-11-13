// ==========================================================
// Week 4 - Day 5 - Mini Project : Coloring Game
// ==========================================================

const colors = [
  "red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen",
  "green", "turquoise", "cyan", "lightskyblue", "dodgerblue", "blue",
  "darkblue", "indigo", "darkmagenta", "violet", "lightpink", "white",
  "gray", "black", "saddlebrown",
];

const palette = document.getElementById("palette");
const grid = document.getElementById("grid");
const current = document.getElementById("current");

let selectedColor = "black";
let isDrawing = false;

// ---- Palette ----
colors.forEach((color) => {
  const swatch = document.createElement("div");
  swatch.classList.add("color");
  swatch.style.backgroundColor = color;

  swatch.addEventListener("click", () => {
    document.querySelectorAll(".color").forEach((c) => c.classList.remove("selected"));
    swatch.classList.add("selected");
    selectedColor = color;
    current.style.backgroundColor = color;
  });

  palette.appendChild(swatch);
});
current.style.backgroundColor = selectedColor;

// ---- Grid of blank squares ----
for (let i = 0; i < 40 * 30; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);
}

const paint = (e) => {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = selectedColor;
  }
};

// mousedown -> start drawing, mouseover -> draw while the mouse is down,
// mouseup -> stop drawing
grid.addEventListener("mousedown", (e) => {
  isDrawing = true;
  paint(e);
});

grid.addEventListener("mouseover", (e) => {
  if (isDrawing) paint(e);
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

// ---- Clear button ----
document.getElementById("clear").addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((sq) => (sq.style.backgroundColor = ""));
});
