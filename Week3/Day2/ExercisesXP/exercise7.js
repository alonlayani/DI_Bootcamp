// Exercise 7 : My Book List

const allBooks = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/isbn/9780747532699-M.jpg",
    alreadyRead: true,
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupery",
    image: "https://covers.openlibrary.org/b/isbn/9780156012195-M.jpg",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");

for (const book of allBooks) {
  const div = document.createElement("div");

  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    details.style.color = "red";
  }

  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;
  img.style.width = "100px";

  div.appendChild(details);
  div.appendChild(img);
  section.appendChild(div);
}
