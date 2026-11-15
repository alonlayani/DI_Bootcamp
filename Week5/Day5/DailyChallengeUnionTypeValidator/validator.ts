// Daily Challenge: Union Type Validator
function validateUnionType(value: any, allowedTypes: string[]): boolean {
  for (const type of allowedTypes) {
    if (typeof value === type) {
      return true;
    }
  }
  return false;
}

// Demo
const values: any[] = [42, "hello", true, { a: 1 }, null, undefined, () => {}];
const allowed = ["string", "number"];

values.forEach((value) => {
  console.log(`${String(value)} (${typeof value}) ->`, validateUnionType(value, allowed));
});

let userId: string | number = 101;
console.log("userId valid:", validateUnionType(userId, ["string", "number"])); // true

let isActive: boolean = true;
console.log("isActive is string|number:", validateUnionType(isActive, ["string", "number"])); // false
console.log("isActive is boolean:", validateUnionType(isActive, ["boolean"])); // true
