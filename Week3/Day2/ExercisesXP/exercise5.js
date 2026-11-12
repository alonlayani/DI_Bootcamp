// Exercise 5 : Users

// 1. Retrieve the div and console.log it
const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");

// Change "Pete" to "Richard"
lists[0].children[1].textContent = "Richard";

// Delete the second <li> of the second <ul> ("Sarah")
lists[1].children[1].remove();

// Change the first <li> of each <ul> to my name
for (const ul of lists) {
  ul.firstElementChild.textContent = "Alon";
}

// 2. Classes
for (const ul of lists) {
  ul.classList.add("student_list");
}
lists[0].classList.add("university", "attendance");

// 3. Styles
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// Hide the <li> "Dan" (last <li> of the second <ul>)
for (const li of document.querySelectorAll("li")) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

// Border on the <li> "Richard"
for (const li of document.querySelectorAll("li")) {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
}

document.body.style.fontSize = "20px";

// Bonus
if (container.style.backgroundColor === "lightblue") {
  const users = [...lists[0].children].map((li) => li.textContent);
  alert(`Hello ${users[0]} and ${users[1]}`);
}
