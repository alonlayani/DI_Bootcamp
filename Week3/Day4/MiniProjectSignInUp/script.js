// ==========================================================
// Week 3 - Day 4 - Mini Project : Double slider Sign in/up Form
// Toggling one class on the container drives all the CSS transitions.
// ==========================================================
const container = document.getElementById("container");

document.getElementById("signUp").addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

document.getElementById("signIn").addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
