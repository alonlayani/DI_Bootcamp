"use strict";
// Daily Challenge: Union Type Validator
function validateUnionType(value, allowedTypes) {
    for (const type of allowedTypes) {
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}
// Demo
const values = [42, "hello", true, { a: 1 }, null, undefined, () => { }];
const allowed = ["string", "number"];
values.forEach((value) => {
    console.log(`${String(value)} (${typeof value}) ->`, validateUnionType(value, allowed));
});
let userId = 101;
console.log("userId valid:", validateUnionType(userId, ["string", "number"])); // true
let isActive = true;
console.log("isActive is string|number:", validateUnionType(isActive, ["string", "number"])); // false
console.log("isActive is boolean:", validateUnionType(isActive, ["boolean"])); // true
