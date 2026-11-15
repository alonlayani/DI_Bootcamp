// 🌟 Exercise 1: Hello, World!
console.log("Hello, World!");

// 🌟 Exercise 2: Type Annotations
const age: number = 28;
const userName: string = "Alon";
console.log(age, userName);

// 🌟 Exercise 3: Union Types
let id: string | number;
id = 42;
console.log(id);
id = "A42";
console.log(id);

// 🌟 Exercise 4: Control Flow with if...else
function checkNumber(num: number): string {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(checkNumber(5), checkNumber(-3), checkNumber(0));

// 🌟 Exercise 5: Tuple Types
function getDetails(name: string, age: number): [string, number, string] {
  return [name, age, `Hello, ${name}! You are ${age} years old.`];
}
const details = getDetails("Alice", 25);
console.log(details); // ['Alice', 25, 'Hello, Alice! You are 25 years old.']

// 🌟 Exercise 6: Object Type Annotations
type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}
console.log(createPerson("Bob", 30)); // { name: 'Bob', age: 30 }

// 🌟 Exercise 7: Type Assertions
// (runs in the browser: see index.html, which has <input id="username">)
if (typeof document !== "undefined") {
  const input = document.getElementById("username") as HTMLInputElement;
  input.value = "Hello from TypeScript!";
  input.style.borderColor = "green";
}

// 🌟 Exercise 8: switch Statement with Complex Conditions
function getAction(role: string): string {
  switch (role.toLowerCase()) {
    case "admin":
      return "Manage users and settings";
    case "editor":
    case "author": // several roles can share the same action
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
}
console.log(getAction("admin"));   // Manage users and settings
console.log(getAction("editor"));  // Edit content
console.log(getAction("viewer"));  // View content
console.log(getAction("guest"));   // Limited access
console.log(getAction("unknown")); // Invalid role

// 🌟 Exercise 9: Function Overloading with Default Parameters
function greet(): string;
function greet(name: string): string;
function greet(name: string = "stranger"): string {
  return `Hello, ${name}!`;
}
console.log(greet());       // Hello, stranger!
console.log(greet("Dana")); // Hello, Dana!
