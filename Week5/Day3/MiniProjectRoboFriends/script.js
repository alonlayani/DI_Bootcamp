const robots = [
  { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", image: "https://robohash.org/1?200x200" },
  { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", image: "https://robohash.org/2?200x200" },
  { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", image: "https://robohash.org/3?200x200" },
  { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", image: "https://robohash.org/4?200x200" },
  { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", image: "https://robohash.org/5?200x200" },
  { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", image: "https://robohash.org/6?200x200" },
  { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", image: "https://robohash.org/7?200x200" },
  { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", image: "https://robohash.org/8?200x200" },
  { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", image: "https://robohash.org/9?200x200" },
  { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", image: "https://robohash.org/10?200x200" },
];

const container = document.getElementById("robots");
const search = document.getElementById("search");
const empty = document.getElementById("empty");

// Build one card with DOM elements (destructuring the robot object)
const createCard = ({ name, email, image }) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = image;
  img.alt = name;

  const title = document.createElement("h2");
  title.textContent = name;

  const mail = document.createElement("p");
  mail.textContent = email;

  card.append(img, title, mail);
  return card;
};

const displayRobots = (list) => {
  container.innerHTML = "";
  list.forEach((robot) => container.appendChild(createCard(robot)));
  empty.hidden = list.length > 0;
};

search.addEventListener("input", (e) => {
  const value = e.target.value.trim().toLowerCase();
  const filtered = robots.filter(({ name }) => name.toLowerCase().includes(value));
  displayRobots(filtered);
});

displayRobots(robots);
