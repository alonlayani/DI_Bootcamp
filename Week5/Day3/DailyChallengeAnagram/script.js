// Daily challenge: Anagram
// Ignore case and whitespace, sort the letters, then compare.
const normalize = (str) =>
  str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");

const isAnagram = (str1, str2) => normalize(str1) === normalize(str2);

console.log(isAnagram("Astronomer", "Moon starer"));       // true
console.log(isAnagram("School master", "The classroom"));  // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Hello", "World"));                   // false
