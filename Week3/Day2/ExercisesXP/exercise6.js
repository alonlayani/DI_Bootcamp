// Exercise 6 : Change the navbar

// Change the id with setAttribute
const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

// Add a new <li> "Logout"
const ul = nav.querySelector("ul");
const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);
ul.appendChild(newLi);

// First and last <li>
console.log(ul.firstElementChild.textContent); // Profile
console.log(ul.lastElementChild.textContent);  // Logout
