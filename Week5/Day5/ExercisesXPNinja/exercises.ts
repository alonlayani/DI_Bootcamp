// Exercise 1: Conditional Types
type MappedType<T> = T extends number ? number : T extends string ? number : never;

function mapType<T extends number | string>(value: T): MappedType<T> {
  if (typeof value === "number") {
    return (value * value) as MappedType<T>;   // square of the number
  }
  return (value as string).length as MappedType<T>; // length of the string
}
console.log(mapType(4));        // 16
console.log(mapType("hello"));  // 5

// Exercise 2: Keyof and Lookup Types
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const car = { brand: "Toyota", year: 2020, electric: false };
const brand: string = getProperty(car, "brand");
const year: number = getProperty(car, "year");
console.log(brand, year, getProperty(car, "electric")); // Toyota 2020 false
// getProperty(car, "color"); // ❌ compile error: "color" is not a key of car

// Exercise 3: Interfaces with Numeric Properties
interface HasNumericProperty {
  [key: string]: number;
}

function multiplyProperty(obj: HasNumericProperty, key: string, factor: number): number {
  if (!(key in obj)) {
    throw new Error(`Property "${key}" does not exist`);
  }
  return obj[key] * factor;
}
const dimensions: HasNumericProperty = { width: 10, height: 5 };
console.log(multiplyProperty(dimensions, "width", 3));  // 30
console.log(multiplyProperty({ price: 19.9, qty: 2 }, "qty", 10)); // 20
