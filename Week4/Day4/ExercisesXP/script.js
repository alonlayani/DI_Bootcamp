// ===== Exercise 1 : Colors =====
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, i) => console.log(`${i + 1}# choice is ${color}.`));

console.log(colors.some((color) => color === "Violet") ? "Yeah" : "No...");

// ===== Exercise 2 : Colors #2 =====
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, i) => {
  const n = i + 1;
  const lastTwo = n % 100;
  const last = n % 10;
  // 11, 12, 13 -> "th"; otherwise 1 -> st, 2 -> nd, 3 -> rd, rest -> th
  const suffix = lastTwo >= 11 && lastTwo <= 13 ? ordinal[0] : last <= 3 ? ordinal[last] : ordinal[0];
  console.log(`${n}${suffix} choice is ${color}.`);
});

// ===== Exercise 3 : Analyzing =====
// ------1------
// result = ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// ------2------
// [...'USA'] -> ['U', 'S', 'A']  (a string is iterable, spread splits it into characters)
// ------Bonus------
// [,,] is an array with 2 empty slots; spreading turns the holes into undefined
// newArray -> [undefined, undefined]

// ===== Exercise 4 : Employees =====
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

// ===== Exercise 5 : Star Wars =====
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const sentence = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(sentence); // "a long time ago in a galaxy far far away"

// ===== Exercise 6 : Employees #2 =====
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

// Bonus: filter + forEach
students
  .filter((student) => student.isPassed)
  .forEach((student) =>
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`)
  );
