// ==========================================================
// Week 3 - Day 4 - Daily Challenge : Show only the letters
// The "input" event also catches paste and autocomplete.
// ==========================================================
const input = document.getElementById("letters");

input.addEventListener("input", () => {
  input.value = input.value.replace(/[^a-zA-Z]/g, "");
});
