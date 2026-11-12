// ==========================================================
// Week 3 - Day 4 - Exercises XP : Animations
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Timer
// ----------------------------------------------------------
const container = document.getElementById("container");

function addParagraph() {
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}

// Part 1: alert after 2 seconds
setTimeout(() => {
  alert("Hello World");
}, 2000);

// Part 2: add a paragraph after 2 seconds
setTimeout(addParagraph, 2000);

// Part 3: add a paragraph every 2 seconds
const intervalId = setInterval(() => {
  addParagraph();
  // stop as soon as there are 5 paragraphs
  if (container.querySelectorAll("p").length >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

// ...or when the user clicks on the button
document.getElementById("clear").addEventListener("click", () => {
  clearInterval(intervalId);
});

// ----------------------------------------------------------
// Exercise 2 : Move the box (1px every millisecond)
// ----------------------------------------------------------
let moveId = null;

function myMove() {
  const box = document.getElementById("animate");
  const boxContainer = document.getElementById("boxContainer");
  const maxPosition = boxContainer.clientWidth - box.offsetWidth; // 350px
  let position = 0;

  clearInterval(moveId); // restart cleanly if clicked twice
  moveId = setInterval(() => {
    if (position >= maxPosition) {
      clearInterval(moveId);
    } else {
      position++;
      box.style.left = `${position}px`;
    }
  }, 1);
}
