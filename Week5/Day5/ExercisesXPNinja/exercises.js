"use strict";
function mapType(value) {
    if (typeof value === "number") {
        return (value * value); // square of the number
    }
    return value.length; // length of the string
}
console.log(mapType(4)); // 16
console.log(mapType("hello")); // 5
// Exercise 2: Keyof and Lookup Types
function getProperty(obj, key) {
    return obj[key];
}
const car = { brand: "Toyota", year: 2020, electric: false };
const brand = getProperty(car, "brand");
const year = getProperty(car, "year");
console.log(brand, year, getProperty(car, "electric")); // Toyota 2020 false
function multiplyProperty(obj, key, factor) {
    if (!(key in obj)) {
        throw new Error(`Property "${key}" does not exist`);
    }
    return obj[key] * factor;
}
const dimensions = { width: 10, height: 5 };
console.log(multiplyProperty(dimensions, "width", 3)); // 30
console.log(multiplyProperty({ price: 19.9, qty: 2 }, "qty", 10)); // 20
