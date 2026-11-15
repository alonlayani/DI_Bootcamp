const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stay on the page

  const data = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
  };

  output.textContent = JSON.stringify(data); // {"name":"John","lastname":"Doe"}
});
