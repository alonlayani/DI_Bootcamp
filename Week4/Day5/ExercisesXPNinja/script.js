// ==========================================================
// Week 4 - Day 5 - Exercises XP Ninja
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Bird class
// ----------------------------------------------------------
// Output:
//   I'm pink. 🌸
//   I'm a bird. 🦢
// The Flamingo constructor runs first and logs "I'm pink.", then super()
// calls the Bird constructor which logs "I'm a bird.".
// There is no error: calling console.log before super() is allowed,
// only using `this` before super() would throw a ReferenceError.
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
