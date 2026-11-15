// Daily challenge: Groceries
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

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log(user, client); // John Betty
  // No: strings are primitives, they are copied BY VALUE.
  // user got its own copy of "John", so changing client doesn't affect user.

  const shopping = groceries;
  groceries.totalPrice = "35$";
  console.log(shopping.totalPrice); // 35$
  // Yes: objects are copied BY REFERENCE. shopping and groceries point
  // to the same object in memory, so a change through one is seen by the other.

  groceries.other.paid = false;
  console.log(shopping.other.paid); // false
  // Yes: same reason — `other` is a nested object inside the same shared object.
};

displayGroceries();
cloneGroceries();
