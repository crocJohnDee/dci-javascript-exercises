// // Closures      aka nested function

// function hello() {
//     function multiply(a, b) {
//         return a * b;
//     }

//     return `Hello ${multiply(10, 3)}`
// }

// console.log(hello());


// // IIFE = Immidiatly invoked function  expression
// // SIAF Self Invoked Anonymous Function
// (function () {
//     return "hello";
// })();

// (function () {
//     let foo = "bar"
//     console.log(foo);

// })();

// (() => console.log("Hello"))();

// (function () {
//     let x = 10;
//     let y = 20;
//     let answer = x + y;
//     console.log(answer);
// })();






const highEnough = (arr, num) => Math.max(...arr) <= num;
console.log(highEnough([5, 3, 32, 34, "35", 34, 2], 35));


//Create a function that tkes two argments, the first is an array and the second is a int
// See if the givin number is greater or equel to any value in the array
// [1,2,3,4],5    => true
// [1,2,3,4],3    => false

// the given array = [23,43,12,34,45,32,65,43,75,32,12,"34"]
// the given int is 65
// change the values to check different results
//BONUS POINTS for not using a loop!!


// Exercise 1) Given a point in a 3D space P = (x1, y1, z1), create a function that calculates its distance to the origin 0 = (0, 0, 0). Write first in ES5 syntax, then convert to ES6 with an arrow function. Challenge (optional): calculate the distance between two points P1 = (x1, y1, z1) and P2 = (x2, y2, z2).
// function dist(x0, y0, z0, x1, y1, z1) {

//     deltaX = x1 - x0;
//     deltaY = y1 - y0;
//     deltaZ = z1 - z0;

//     distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

//     return distance;
// }

// console.log(dist(2, 3, 5, 0, 0, 0));


// Exercise 1: Check for boolean
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


const isBool = X => !!X;
console.log(isBool(3));


// Exercise 2: Check for Index
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1)

// function getIndexToIns(arr, int) {
//     arr.push(int)
//     arr.sort((a, b) => a - b)
//     return arr.indexOf(int)
// }

// console.log(getIndexToIns([20, 3, 5], 19));


// Team Ice Cream.Nike, Arturo & Joseph
// Select an ice cream dependent on the temperature given.
// Using a function select an ice cream dependent on the argument.
// Temperatures are

//     < 12 = eat cake,

// > = 12 = chocolate,
// > = 18 = vanilla,
// > = 25 = strawberry,
// > = 30 = mango

// function whatToEat(temp) {
//     if (temp < 12) {
//         return "eat cake"
//     } else if (temp >= 12) {
//         return "chocolate"
//     } else if (temp >= 18) {
//         return "vanilla"
//     } else if (temp >= 25) {
//         return "strawberry"
//     } else {
//         return "mango"
//     }
// }

// console.log(whatToEat(15));





