// ==========================================================
// Week 2 - Day 5 - Exercises XP Ninja
// ==========================================================

// Exercise 1: Checking the BMI
const person1 = {
  fullName: "Alon Layani",
  mass: 75, // kg
  height: 1.8, // m
  bmi() {
    return this.mass / (this.height * this.height);
  },
};

const person2 = {
  fullName: "Dana Cohen",
  mass: 60,
  height: 1.65,
  bmi() {
    return this.mass / (this.height * this.height);
  },
};

function compareBMI(a, b) {
  console.log(`${a.fullName}: ${a.bmi().toFixed(2)} / ${b.fullName}: ${b.bmi().toFixed(2)}`);
  if (a.bmi() > b.bmi()) {
    console.log(`${a.fullName} has the largest BMI.`);
  } else if (b.bmi() > a.bmi()) {
    console.log(`${b.fullName} has the largest BMI.`);
  } else {
    console.log("They have the same BMI.");
  }
}

compareBMI(person1, person2);

// Exercise 2: Grade Average
// Bonus: split into two functions, one calls the other.
function calculateAverage(gradesList) {
  let total = 0;
  for (let i = 0; i < gradesList.length; i++) {
    total += gradesList[i];
  }
  return total / gradesList.length;
}

function findAvg(gradesList) {
  const average = calculateAverage(gradesList);
  console.log(`Average: ${average.toFixed(2)}`);
  if (average > 65) {
    console.log("You passed!");
  } else {
    console.log("You failed and must repeat the course.");
  }
}

findAvg([80, 70, 90, 60]);
findAvg([50, 40, 70]);
