let length = 16.78; // float
let lastName = "Johnson"; // string
let car = ""; // string
let isOpen = true; // boolean
console.log(typeof length, typeof lastName, typeof car, typeof isOpen);

let ageMark = "40";
let ageJohn = 50;
console.log(typeof ageMark, typeof ageJohn);

let truthy = true;
console.log("John is older than Mark: " + truthy);


let x;
console.log(typeof x);

x = "x is now a string"
console.log(typeof x);

console.log((x[x.length - 1]));

console.log(x.length, typeof x.length);

// 8. Declare three variables: a, b, c.Assign numbers to each of the variables.Check if the variable values are equal or not(e.g.console.log(a == b);).Do this for each possibility(a, b)(a, c), (b, c).Then, print the data type of this check to the console.

let a = 3;
let b = 5;
let c = 8;

console.log(a == b, a == c, b == c);
console.log(typeof false);

// 9. What is the type of Infinity?Comment your answer.Print the type of infinity to the console.
console.log(typeof Infinity);

// 10. Declare a variable.Assign the variable the value of a number or a string.Use the isNaN() method to check whether the variable is a number or not.Print "variable is NOT a number: true/false".
let numOrString = "hello";
let result = isNaN(numOrString);
console.log("variable is NOT a number: " + result);
// 11. Print the data type of isNaN(variable) to the console.
console.log(typeof isNaN(5));