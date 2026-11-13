// ==========================================================
// Week 4 - Day 2 - Daily Challenge : Groceries
// ==========================================================

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// 1. displayGroceries
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries();

// 2. cloneGroceries
const cloneGroceries = () => {
  // user is a copy of client
  let user = client;

  client = "Betty";
  console.log(user); // "John"
  // No, we won't see the modification in user.
  // Strings are primitive types: they are passed BY VALUE.
  // user received a copy of the value "John", it is not linked to client.

  // shopping points to the same object as groceries
  const shopping = groceries;

  groceries.totalPrice = "35$";
  console.log(shopping.totalPrice); // "35$"
  // Yes, we see the modification in shopping.
  // Objects are passed BY REFERENCE: shopping and groceries are two names
  // for the same object in memory.

  groceries.other.paid = false;
  console.log(shopping.other.paid); // false
  // Yes, for the same reason: the nested object `other` is also shared
  // through the same reference.
};

cloneGroceries();
