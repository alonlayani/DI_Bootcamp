// ==========================================================
// Week 2 - Day 5 - Exercises XP (Introduction to JavaScript)
// ==========================================================

// ----------------------------------------------------------
// Exercise 1: List of people
// ----------------------------------------------------------
const people = ["Greg", "Mary", "Devon", "James"];

people.shift();                                  // remove "Greg"
people[people.indexOf("James")] = "Jason";       // replace "James" with "Jason"
people.push("Alon");                             // add my name at the end
console.log(people.indexOf("Mary"));             // 0
const copy = people.slice(1, people.length - 1); // without "Mary" and my name
console.log(copy);                               // ["Devon", "Jason"]
console.log(people.indexOf("Foo"));              // -1 -> "Foo" is not in the array
const last = people[people.length - 1];          // last index = length - 1
console.log(last);                               // "Alon"

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

// ----------------------------------------------------------
// Exercise 2: Your favorite colors
// ----------------------------------------------------------
const colors = ["blue", "red", "green", "black", "yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus: correct suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// ----------------------------------------------------------
// Exercise 3: Repeat the question
// prompt() returns a STRING, so we convert it with Number().
// do...while is the best fit: we always ask at least once.
// ----------------------------------------------------------
let number;
do {
  number = Number(prompt("Enter a number:"));
  console.log(typeof number, number);
} while (number < 10);

// ----------------------------------------------------------
// Exercise 4: Building Management
// ----------------------------------------------------------
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];
console.log(secondTenant, building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]);

const rent = building.numberOfRoomsAndRent;
if (rent.sarah[1] + rent.david[1] > rent.dan[1]) {
  rent.dan[1] = 1200;
}
console.log(rent.dan);

// ----------------------------------------------------------
// Exercise 5: Family
// ----------------------------------------------------------
const family = { father: "David", mother: "Rachel", son: "Alon", daughter: "Noa" };
for (const key in family) {
  console.log(key);
}
for (const key in family) {
  console.log(family[key]);
}

// ----------------------------------------------------------
// Exercise 6: Rudolf
// ----------------------------------------------------------
const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
let sentence = "";
for (const key in details) {
  sentence += `${key} ${details[key]} `;
}
console.log(sentence.trim()); // my name is Rudolf the reindeer

// ----------------------------------------------------------
// Exercise 7: Secret Group
// ----------------------------------------------------------
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const societyName = names.map((name) => name[0]).sort().join("");
console.log(societyName); // ABJKPS
