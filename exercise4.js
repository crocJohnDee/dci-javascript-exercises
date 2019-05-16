// **Operators Exercises**

// These exercises are aimed at making you familiar with the aritmetic operators. Print all your results to the console.

// Declare two variables "x" and "y" and assign number values. 

// 1. Add x and y, and print the result to the console.
let x = 25;
let y = 50;
console.log("1: " + (x + y));

// 2. Subtract y from x, and print the result to the console. Then, subtract x from y and print the result to the console.
console.log("2: " + (x - y));

// 3. Multiply x and y, and print the result to the console.
console.log("3: " + (x * y));

// 4. Divide x and y, and print the result to the console. 
console.log("4: " + (x / y));

// 5. Declare another variable "z" with the value "10". Multiply x and y. Then, divide the result by z. Store the result in a new variable named "resultOne". Print "result" to the console.
let z = 10;
let resultOne = (x * y) / z;
console.log("5: " + resultOne);

// 6. Declare two variables "a" with the value of 15 and "b" with the value of 9. Print the remainder when a is divided by b. 
let a = 15;
let b = 9;
console.log("6: " + (15 % 9));

// 7. Declare another variable "c" with the value of 20. Add a and b, then multiply the result by c. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let c = 20;
let resultTwo = (a + b) * c;
console.log("7: " + resultTwo)

// 8. Increment a. Print the result to the console.
console.log("8: " + ++a);
--a;

// 9. Decrement b. Print the result to the console.
console.log("9: " + --b);
++b;

// 10. Subtract a from b and store this in a new variable "d". Add d and c. Print the result to the console.
let d = b - a;
console.log("10: " + d);

// 11. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
console.log("11: " + (resultOne % resultTwo));