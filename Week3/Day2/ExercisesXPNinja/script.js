// ==========================================================
// Week 3 - Day 2 - Exercises XP Ninja
// ==========================================================

// Exercise 1: Random Number - even numbers from 0 to a random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random number: ${randomNumber}`);
for (let i = 0; i <= randomNumber; i += 2) {
  console.log(i);
}

// Exercise 2: Capitalized letters
function capitalize(str) {
  let even = "";
  let odd = "";
  for (let i = 0; i < str.length; i++) {
    even += i % 2 === 0 ? str[i].toUpperCase() : str[i];
    odd += i % 2 === 1 ? str[i].toUpperCase() : str[i];
  }
  return [even, odd];
}
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

// Exercise 3 : Is palindrome?
const isPalindrome = (str) => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === [...clean].reverse().join("");
};
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Exercise 4 : Biggest Number (ignores non-numbers, 0 for an empty array)
function biggestNumberInArray(arrayNumber) {
  let biggest = 0;
  let found = false;
  for (const value of arrayNumber) {
    if (typeof value === "number" && (!found || value > biggest)) {
      biggest = value;
      found = true;
    }
  }
  return biggest;
}
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(["a", 3, 4, 2]));              // 4
console.log(biggestNumberInArray([]));                          // 0

// Exercise 5: Unique Elements
const unique = (list) => [...new Set(list)];
console.log(unique([1, 2, 3, 3, 3, 3, 4, 5])); // [1, 2, 3, 4, 5]

// Exercise 6 : Calendar (month is 1-12)
function createCalendar(year, month) {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  const header = table.insertRow();
  for (const day of ["MO", "TU", "WE", "TH", "FR", "SA", "SU"]) {
    const th = document.createElement("th");
    th.textContent = day;
    header.appendChild(th);
  }

  const date = new Date(year, month - 1, 1);
  let row = table.insertRow();
  // getDay(): 0 = Sunday -> convert so that Monday = 0
  const offset = (date.getDay() + 6) % 7;
  for (let i = 0; i < offset; i++) {
    row.insertCell().textContent = "";
  }

  while (date.getMonth() === month - 1) {
    if (row.cells.length === 7) {
      row = table.insertRow();
    }
    row.insertCell().textContent = date.getDate();
    date.setDate(date.getDate() + 1);
  }
  while (row.cells.length < 7) {
    row.insertCell().textContent = "";
  }

  for (const cell of table.querySelectorAll("td, th")) {
    cell.style.border = "1px solid black";
    cell.style.padding = "4px 8px";
    cell.style.textAlign = "center";
  }
  document.body.appendChild(table);
}

if (typeof document !== "undefined") {
  createCalendar(2012, 9);
}
