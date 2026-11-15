// Daily Challenge : True or False
// Returns true if ALL parameters are truthy, false otherwise.
const allTruthy = (...args) => args.every(Boolean);

console.log(allTruthy(true, true, true));    // true
console.log(allTruthy(true, false, true));   // false
console.log(allTruthy(5, 4, 3, 2, 1, 0));    // false
