// ==========================================================
// Week 4 - Day 5 - Exercises XP
// ==========================================================

// ----------------------------------------------------------
// Exercise 1 : Location
// ----------------------------------------------------------
// Output: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const { name, location: { country, city, coordinates: [lat, lng] } } = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// ----------------------------------------------------------
// Exercise 2 : Display Student Info
// ----------------------------------------------------------
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}
console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" })); // 'Your full name is Elie Schoppik'

// ----------------------------------------------------------
// Exercise 3 : User & id
// ----------------------------------------------------------
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray); // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

const usersDoubled = usersArray.map(([user, id]) => [user, id * 2]);
console.log(usersDoubled); // [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// ----------------------------------------------------------
// Exercise 4 : Person class
// ----------------------------------------------------------
// Output: "object" -> an instance of a class is an object
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person("John");
console.log(typeof member); // object

// ----------------------------------------------------------
// Exercise 5 : Dog class
// ----------------------------------------------------------
// Answer: option 2.
// 1 and 4: `this` is used before calling super() -> ReferenceError.
// 3: super(name) is called but `name` is not a parameter of the constructor,
//    so the name is not passed correctly.
// 2: calls super(name) first, then adds size. ✔
class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
console.log(new Labrador("Rocky", "large"));

// ----------------------------------------------------------
// Exercise 6 : Challenges
// ----------------------------------------------------------
// [2] === [2] -> false (two different arrays in memory)
// {} === {}   -> false (two different objects in memory)
console.log([2] === [2]); // false
console.log({} === {}); // false

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4 -> object2 points to the same object as object1
console.log(object3.number); // 4 -> object3 also points to the same object
console.log(object4.number); // 5 -> object4 is a different object

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo")); // Moooo I'm a cow, named Lily and I'm brown and white
