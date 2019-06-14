let string = "HelloWorld";
let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
}

console.log(reversed);


// Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
// **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
let friends = ["Berta", "Johnsson", "Luuk", "Tiffany", "Nike", "Oskar"]
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]} you are in index ${i}`);
}

//Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = `, i * j)
    }
}

// function makeTree(num) {
// let space = " ".repeat(num);
let star = "                         *";
const starLength = star.length - 1;
// let line = space += star;
// const strLength = space += star;

for (let i = 0; i <= starLength; i++) {
    console.log(star);
    star = star.substr(1);
    star += "**";
}
// }
// makeTree(50);


// Check all numbers from 1 to 100 and print to the console only the primes.
// Primes are the numbers that are perfectly divisible ONLY by themselves and 1

// for (let i = 2; i <= 100; i++) {
//     for (let j = 2; j <= i - 1; j++) {
//         if (i % j === 2) {
//             console.log(i);

//         }
//     }
// }


let numbarray = [12, 23, 23, 23, 23, 23];
let currentSum = 1;
for (let i = 0; i < numbarray.length; i++) {
    currentSum *= numbarray[i];

}

console.log(currentSum);


// Fruity Group
/* 1. Declare 5 fruits. Using a 'while loop' console log all the fruits - up to and including fruit 2.
/ *2. Using the same fruits and using a 'for loop' console log all fruits omitting (except) fruit number 2.*/

let fruits = ["Banana", "Strawberry", "Tomato", "Grape", "Melon"];

for (let i = 0; i < fruits.length; i++) {
    if (i != 2) {
        console.log(fruits[i]);

    }
}


// The Car Race
// There is a track with a length of 50,8km.
// To finish the race, everybody has to go for 8 rounds.
// 5 drivers are participating.
// Each driver is going with differents speed.
// 1. car starts with 81km/h and is gaining each round 12km/h
// 2. car starts with 69km/h and is gaining each round 17km/h
// 3. car starts with 85km/h and is gaining each round 9km/h
// 4. car starts with 80km/h and is gaining each round 13km/h
// 5. car starts with 75km/h and is gaining each round 16km/h

// Who will finish first?

// Use loops god damn it!

const totalLength = 50.8 * 8;
let driver1 = 81;
let total = 0;
for (let i = 1; i <= 8; i++) {
    total += driver1;
    driver1 += 12;


}

console.log(total)