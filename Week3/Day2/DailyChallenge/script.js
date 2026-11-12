// ==========================================================
// Week 3 - Day 2 - Daily Challenge: Planets
// An array of OBJECTS is used so each planet can store its color
// and its number of moons (bonus).
// ==========================================================
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "goldenrod", moons: 0 },
  { name: "Earth", color: "royalblue", moons: 1 },
  { name: "Mars", color: "firebrick", moons: 2 },
  { name: "Jupiter", color: "sandybrown", moons: 4 },
  { name: "Saturn", color: "khaki", moons: 3 },
  { name: "Uranus", color: "lightseagreen", moons: 2 },
  { name: "Neptune", color: "navy", moons: 1 },
];

const section = document.querySelector(".listPlanets");

for (const planet of planets) {
  const div = document.createElement("div");
  div.classList.add("planet");
  div.style.backgroundColor = planet.color;
  div.textContent = planet.name;

  // Bonus: the moons, placed around the planet
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    const angle = (2 * Math.PI * i) / planet.moons;
    moon.style.left = `${60 + 75 * Math.cos(angle) - 20}px`;
    moon.style.top = `${60 + 75 * Math.sin(angle) - 20}px`;
    div.appendChild(moon);
  }

  section.appendChild(div);
}
