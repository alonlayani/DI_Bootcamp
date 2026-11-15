// ===== Part 1 : Quote generator =====
const quotes = [
  { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
  { id: 1, author: "Steve Jobs", quote: "Stay hungry, stay foolish.", likes: 0 },
  { id: 2, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
  { id: 3, author: "Albert Einstein", quote: "Imagination is more important than knowledge.", likes: 0 },
  { id: 4, author: "Nelson Mandela", quote: "It always seems impossible until it's done.", likes: 0 },
  { id: 5, author: "Steve Jobs", quote: "The only way to do great work is to love what you do.", likes: 0 },
];

const quoteSection = document.getElementById("quote-section");
const info = document.getElementById("info");
let currentQuote = null;

const renderQuote = (container, { quote, author, likes }) => {
  container.innerHTML = "";
  const block = document.createElement("blockquote");
  block.textContent = `“${quote}”`;
  const authorP = document.createElement("p");
  authorP.className = "author";
  authorP.textContent = `— ${author}`;
  const likesP = document.createElement("p");
  likesP.className = "likes";
  likesP.textContent = `${likes} like${likes === 1 ? "" : "s"}`;
  container.append(block, authorP, likesP);
};

const generateQuote = () => {
  if (quotes.length === 0) return;
  let random;
  // never show the same quote twice in a row
  do {
    random = quotes[Math.floor(Math.random() * quotes.length)];
  } while (quotes.length > 1 && currentQuote && random.id === currentQuote.id);
  currentQuote = random;
  info.textContent = "";
  renderQuote(quoteSection, currentQuote);
};

document.getElementById("generate-btn").addEventListener("click", generateQuote);

// ===== Part 2 : Add a quote =====
document.getElementById("add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const quoteInput = document.getElementById("new-quote");
  const authorInput = document.getElementById("new-author");
  const newId = quotes.length ? Math.max(...quotes.map((q) => q.id)) + 1 : 0;
  quotes.push({ id: newId, author: authorInput.value.trim(), quote: quoteInput.value.trim(), likes: 0 });
  info.textContent = `Quote #${newId} added!`;
  e.target.reset();
});

// ===== Part 2 : Stats & Like buttons =====
const needQuote = () => {
  if (!currentQuote) {
    info.textContent = "Generate a quote first.";
    return false;
  }
  return true;
};

document.getElementById("chars-with-spaces").addEventListener("click", () => {
  if (needQuote()) info.textContent = `Characters (with spaces): ${currentQuote.quote.length}`;
});

document.getElementById("chars-no-spaces").addEventListener("click", () => {
  if (needQuote()) info.textContent = `Characters (no spaces): ${currentQuote.quote.replace(/\s/g, "").length}`;
});

document.getElementById("words-btn").addEventListener("click", () => {
  if (needQuote()) info.textContent = `Words: ${currentQuote.quote.trim().split(/\s+/).length}`;
});

document.getElementById("like-btn").addEventListener("click", () => {
  if (!needQuote()) return;
  currentQuote.likes++;
  renderQuote(quoteSection, currentQuote);
});

// ===== Part 3 : Filter by author with Previous / Next =====
const filterSection = document.getElementById("filter-section");
const navButtons = document.getElementById("nav-buttons");
let filtered = [];
let filterIndex = 0;

const showFiltered = () => {
  renderQuote(filterSection, filtered[filterIndex]);
  const counter = document.createElement("p");
  counter.className = "likes";
  counter.textContent = `${filterIndex + 1} / ${filtered.length}`;
  filterSection.appendChild(counter);
};

document.getElementById("filter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("filter-author").value.trim().toLowerCase();
  filtered = quotes.filter((q) => q.author.toLowerCase().includes(name));
  filterIndex = 0;
  if (filtered.length === 0) {
    filterSection.innerHTML = "<p class='placeholder'>No quote found for this author.</p>";
    navButtons.hidden = true;
    return;
  }
  navButtons.hidden = filtered.length < 2;
  showFiltered();
});

document.getElementById("next-btn").addEventListener("click", () => {
  filterIndex = (filterIndex + 1) % filtered.length;
  showFiltered();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  filterIndex = (filterIndex - 1 + filtered.length) % filtered.length;
  showFiltered();
});
