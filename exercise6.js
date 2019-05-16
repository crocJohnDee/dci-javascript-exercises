let a = true;
let b = false;
// 1. Check the result of a AND b. 
console.log("1: " + (a && b));

// 2. Check the result of a OR b.
console.log("2: " + (a || b));

// 3. Check the result of NOT a AND b. 
console.log("3: " + (!a && b));

// 4. Declare three more variables "x", "y", "z". Give these variables number values.
let x = 10;
let y = 20;
let z = 30;
console.log("4: " + a, y, z);

// 5. Check the result of whether x is greater than z AND x is greater than y.
console.log("5: " + ((x > z) && (x > y)));

// 6. Check the result of whether x is NOT equal to y. 
console.log("6: " + (x != y));

// 7. Check the result of whether z is less than y OR z is greater than x. 
console.log("7: " + ((z < y) || (z > x)));

// 8. Check the result of whether x is equal to z OR x is NOT equal to y.
console.log("8: " + ((x === z) || (x != y)));

// 9. Check the result of whether x is greater than or equal to 10 AND y is less than or equal to 10.
console.log("9: " + ((x >= 10) && (y <= 10)));

// 10. Check the result of whether x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100. 
console.log("10: " + ((x * z) < 100 || (x * y) > 100));