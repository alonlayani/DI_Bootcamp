// ==========================================================
// Week 2 - Day 5 - Daily Challenge: Not Bad
// ==========================================================

function notBad(sentence) {
  const wordNot = sentence.indexOf("not");
  const wordBad = sentence.indexOf("bad");

  if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    return sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  }
  return sentence;
}

let sentence = "The movie is not that bad, I like it";
console.log(notBad(sentence)); // The movie is good, I like it

console.log(notBad("This dinner is not that bad ! You cook well")); // This dinner is good ! You cook well
console.log(notBad("This movie is not so bad !"));                  // This movie is good !
console.log(notBad("This dinner is bad !"));                        // This dinner is bad !
