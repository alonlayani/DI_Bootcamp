// Exercise 1 : Scope — predictions

// #1  funcOne()
// a is declared with let inside the function (value 5). The if condition (5 > 1) is true,
// so a is reassigned to 3.
// #1.1 -> alert: "inside the funcOne function 3"
// #1.2 With const, `a = 3` throws "TypeError: Assignment to constant variable." -> no alert.

// #2  global let a = 0
// #2.1 funcThree() -> "inside the funcThree function 0"
//      funcTwo()   -> reassigns the GLOBAL a to 5 (no new declaration inside the function)
//      funcThree() -> "inside the funcThree function 5"
// #2.2 With const, funcTwo() throws "TypeError: Assignment to constant variable."
//      The first funcThree() still alerts 0, then the error stops the rest.

// #3  funcFour() creates a property `a` on the window object = "hello"
// #3.1 funcFive() -> "inside the funcFive function hello"
//      (a is looked up in the global scope and found on window).
//      Note: if a global `let a` already existed, it would shadow window.a.

// #4  global let a = 1, but funcSix declares its own `let a = "test"` (function scope)
// #4.1 funcSix() -> "inside the funcSix function test"  (the inner a shadows the global one)
// #4.2 With const: same result, "test" — nothing is reassigned, so no error.

// #5  let is block scoped
// #5.1 -> "in the if block 5"  then  "outside of the if block 2"
// #5.2 With const: same result — each block has its own variable and nothing is reassigned.
