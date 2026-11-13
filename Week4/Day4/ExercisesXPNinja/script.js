// ==========================================================
// Week 4 - Day 4 - Exercises XP Ninja
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Dog age to Human years
// ----------------------------------------------------------
const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Cuty", age: 5, type: "rabbit" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" },
  { name: "Rex", age: 10, type: "dog" },
];

// With a loop
let dogsHumanYears = 0;
for (const animal of data) {
  if (animal.type === "dog") {
    dogsHumanYears += animal.age * 7;
  }
}
console.log(dogsHumanYears); // 154

// With reduce()
const dogsHumanYearsReduce = data.reduce(
  (acc, animal) => (animal.type === "dog" ? acc + animal.age * 7 : acc),
  0
);
console.log(dogsHumanYearsReduce); // 154

// ----------------------------------------------------------
// Exercise 2 : Email
// ----------------------------------------------------------
const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
console.log(userEmail3.trim());

// ----------------------------------------------------------
// Exercise 3 : Employees #3
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

const usersByName = {};
users.forEach((user) => {
  usersByName[`${user.firstName} ${user.lastName}`] = user.role;
});
console.log(usersByName);

// ----------------------------------------------------------
// Exercise 4 : Array to Object
// ----------------------------------------------------------
const letters = ["x", "y", "z", "z"];

// With a for loop
const countLoop = {};
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  countLoop[letter] = (countLoop[letter] || 0) + 1;
}
console.log(countLoop); // { x: 1, y: 1, z: 2 }

// With reduce()
const countReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(countReduce); // { x: 1, y: 1, z: 2 }
