let num1 = 50;
let num2 = 100;

console.log("1: " + Math.PI); //returns PI
console.log("2: " + Math.PI.toFixed(3)); // return p with only 3 decimals
console.log("3: " + Math.E); // ????
console.log("4: " + Math.round(2.4999999999999)); // rounds up or down
console.log("5: " + Math.ceil(198.0001)); //rounds up
console.log("6: " + Math.floor(20.99999999)); // rounds down
console.log("7: " + Math.sqrt(64)); //Get the squared root
console.log("8: " + Math.abs(-199)); //Turns a negetive into a positive
console.log("9: " + Math.pow(10, 9)); // To the power
console.log("10: " + Math.min(13, 200, 3, 2827, -1)); // returns the lowest number
console.log("11: " + Math.max(13, 200, 3, 2827, -1)); // returns the highest number
console.log("12: " + Math.random()); // reurns a random between 0 and 1
console.log("13: " + Math.floor(Math.random() * 256)); // returns a number between 0 and 256


let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
console.log(`r = ${r} - g = ${g} - b = ${b}`);


