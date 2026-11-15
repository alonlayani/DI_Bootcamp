// Exercise 3 : JSON Mario
const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// 1. Convert to JSON
const marioJSON = JSON.stringify(marioGame);
console.log(marioJSON);
// The nested objects are converted too: they become nested JSON objects inside the string.
// Keys get double quotes, trailing commas are removed, and everything is one single string.

// 2. Convert and pretty print (2 spaces of indentation)
const marioPretty = JSON.stringify(marioGame, null, 2);
console.log(marioPretty);

// 3. Breakpoint: open exercise3.html in the browser, DevTools > Sources,
// the `debugger` statement below pauses the code so you can inspect marioJSON / marioPretty.
debugger;
