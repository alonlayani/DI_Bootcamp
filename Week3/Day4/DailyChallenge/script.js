// ==========================================================
// Week 3 - Day 4 - Daily Challenge: Mad Libs
// ==========================================================
const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const fields = ["noun", "adjective", "person", "verb", "place"];

let words = null;
let lastIndex = -1;

const stories = [
  (w) => `${w.person} found a ${w.adjective} ${w.noun} in ${w.place} and decided to ${w.verb} all day long.`,
  (w) => `In ${w.place}, a ${w.adjective} ${w.noun} taught ${w.person} how to ${w.verb}.`,
  (w) => `Every morning ${w.person} goes to ${w.place} to ${w.verb} with a very ${w.adjective} ${w.noun}.`,
  (w) => `Nobody in ${w.place} could ${w.verb} like ${w.person}, until a ${w.adjective} ${w.noun} arrived.`,
];

function getValues() {
  const values = {};
  for (const id of fields) {
    const value = document.getElementById(id).value.trim();
    if (value === "") {
      return null;
    }
    values[id] = value;
  }
  return values;
}

function displayRandomStory() {
  // pick a different story than the one currently displayed
  let index;
  do {
    index = Math.floor(Math.random() * stories.length);
  } while (index === lastIndex && stories.length > 1);
  lastIndex = index;
  storySpan.textContent = stories[index](words);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = getValues();
  if (!values) {
    storySpan.textContent = "Please fill in all the fields!";
    return;
  }
  words = values;
  displayRandomStory();
});

// Bonus: shuffle keeps the words but changes the story
document.getElementById("shuffle-button").addEventListener("click", () => {
  if (words) {
    displayRandomStory();
  }
});
