// ==========================================================
// Week 3 - Day 4 - Exercises XP
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Change the article
// ----------------------------------------------------------
const article = document.querySelector("article");

// h1 with a DOM property
const h1 = article.firstElementChild;
console.log(h1);

// remove the last paragraph
article.lastElementChild.remove();

// h2 -> red background on click
const h2 = article.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// h3 -> hidden on click
const h3 = article.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// button -> all paragraphs bold
document.getElementById("boldBtn").addEventListener("click", () => {
  for (const p of article.querySelectorAll("p")) {
    p.style.fontWeight = "bold";
  }
});

// Bonus: random font size (0-100px) when hovering the h1
h1.addEventListener("mouseover", () => {
  h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
});

// Bonus: the 2nd paragraph fades out on hover
const secondParagraph = article.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", () => {
  secondParagraph.classList.add("fade-out");
});

// ----------------------------------------------------------
// Exercise 2 : Work with forms
// ----------------------------------------------------------
const form = document.getElementById("userForm");
console.log(form);

console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));

console.log(document.getElementsByName("firstname")[0]);
console.log(document.getElementsByName("lastname")[0]);

form.addEventListener("submit", (event) => {
  // preventDefault() stops the browser from reloading the page
  // (the default behaviour of a form submission), so we keep our data.
  event.preventDefault();

  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();

  if (firstName === "" || lastName === "") {
    alert("Please fill in both fields.");
    return;
  }

  const answers = document.querySelector(".usersAnswer");
  answers.innerHTML = "";
  for (const value of [firstName, lastName]) {
    const li = document.createElement("li");
    li.textContent = value;
    answers.appendChild(li);
  }
});

// ----------------------------------------------------------
// Exercise 3 : Transform the sentence
// ----------------------------------------------------------
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("#sentence strong");
}

function highlight() {
  for (const item of allBoldItems) {
    item.style.color = "blue";
  }
}

function returnItemsToDefault() {
  for (const item of allBoldItems) {
    item.style.color = "black";
  }
}

getBoldItems();
const sentence = document.getElementById("sentence");
sentence.addEventListener("mouseover", highlight);
sentence.addEventListener("mouseout", returnItemsToDefault);

// ----------------------------------------------------------
// Exercise 4 : Volume of a sphere  V = 4/3 * PI * r^3
// ----------------------------------------------------------
document.getElementById("MyForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const radius = parseFloat(document.getElementById("radius").value);
  const volumeInput = document.getElementById("volume");
  if (isNaN(radius) || radius < 0) {
    volumeInput.value = "Please enter a valid radius";
    return;
  }
  const volume = (4 / 3) * Math.PI * radius ** 3;
  volumeInput.value = volume.toFixed(4);
});
