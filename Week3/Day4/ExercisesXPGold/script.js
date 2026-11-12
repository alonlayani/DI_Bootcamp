// ==========================================================
// Week 3 - Day 4 - Exercises XP Gold
// ==========================================================

// Exercise 1 : Select a kind of Music
const genres = document.getElementById("genres");
console.log(genres.value); // blues

const classic = document.createElement("option");
classic.value = "classic";
classic.textContent = "Classic";
genres.appendChild(classic);
classic.selected = true;
console.log(genres.value); // classic

// Exercise 2: Delete colors
function removecolor() {
  const colorSelect = document.getElementById("colorSelect");
  if (colorSelect.selectedIndex !== -1) {
    colorSelect.remove(colorSelect.selectedIndex);
  }
}
document.getElementById("removeBtn").addEventListener("click", removecolor);

// Exercise 3 : Create a shopping list (built only with JS)
let shoppingList = [];
const root = document.getElementById("root");

const form = document.createElement("form");
const itemInput = document.createElement("input");
itemInput.type = "text";
itemInput.placeholder = "What do you need to buy?";
const addButton = document.createElement("button");
addButton.type = "submit";
addButton.textContent = "AddItem";
form.append(itemInput, addButton);

const clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.textContent = "ClearAll";

const list = document.createElement("ul");
root.append(form, clearButton, list);

function render() {
  list.innerHTML = "";
  for (const item of shoppingList) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
}

function addItem(event) {
  event.preventDefault();
  const item = itemInput.value.trim();
  if (item !== "") {
    shoppingList.push(item);
    itemInput.value = "";
    render();
  }
}

function clearAll() {
  shoppingList = [];
  render();
}

form.addEventListener("submit", addItem);
clearButton.addEventListener("click", clearAll);
