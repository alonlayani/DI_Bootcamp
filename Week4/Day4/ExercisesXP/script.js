// ==========================================================
// Week 4 - Day 4 - Exercises XP
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Colors
// ----------------------------------------------------------
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, i) => console.log(`${i + 1}# choice is ${color}.`));

console.log(colors.some((color) => color === "Violet") ? "Yeah" : "No...");

// ----------------------------------------------------------
// Exercise 2 : Colors #2
// ----------------------------------------------------------
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, i) => {
  const n = i + 1;
  const suffix = n <= 3 ? ordinal[n] : ordinal[0];
  console.log(`${n}${suffix} choice is ${color}.`);
});

// ----------------------------------------------------------
// Exercise 3 : Analyzing
// ----------------------------------------------------------
// ------1------
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);

// ------2------
// ['U', 'S', 'A']  -> a string is iterable, spread splits it into characters
const country = "USA";
console.log([...country]);

// ------Bonus------
// [undefined, undefined] -> [,,] is an array with 2 empty slots,
// spreading it turns the empty slots into undefined values
let newArray = [...[, ,]];
console.log(newArray);

// ----------------------------------------------------------
// Exercise 4 : Employees
// ----------------------------------------------------------
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1. map
const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. filter
const fullStackResidents = users.filter((user) => user.role === "Full Stack Resident");
console.log(fullStackResidents);

// 3. Bonus: filter + map
const residentsLastNames = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((user) => user.lastName);
console.log(residentsLastNames); // ['Bouley', 'Alnaji', 'Hajek']

// ----------------------------------------------------------
// Exercise 5 : Star Wars
// ----------------------------------------------------------
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const sentence = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(sentence); // "a long time ago in a galaxy far far away"

// ----------------------------------------------------------
// Exercise 6 : Employees #2
// ----------------------------------------------------------
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const passedStudents = students.filter((student) => student.isPassed);
console.log(passedStudents);

// Bonus
students
  .filter((student) => student.isPassed)
  .forEach((student) =>
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`)
  );
