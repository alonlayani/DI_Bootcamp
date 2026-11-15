// Read the data sent in the URL (query string) by the GET form
const params = new URLSearchParams(window.location.search);
const section = document.getElementById("result");

for (const [key, value] of params) {
  const p = document.createElement("p");
  p.textContent = `${key}: ${value}`;
  section.appendChild(p);
}

if (!section.children.length) {
  section.textContent = "No data received.";
}
