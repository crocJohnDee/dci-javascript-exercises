// **Conditionals Exercises**

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use if statements to complete the following exercises. 
// **Print your results to the console**

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let x = 40;
let y = 80;
if (x >= 50 && x <= 99 || y >= 50 && y <= 99) {
    console.log("1: " + true);
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let z = 120;
if (x >= 50 && x <= 99 || y >= 50 && y <= 99 || z >= 50 && z <= 99) {
    console.log("2: " + true);
}

// 3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
let a = 21;
let b = 29;
let c = 5865426456356;
if (a > b && a > c) {
    console.log("3: " + a);
} else if (b > a && b > c) {
    console.log("3: " + b);
} else {
    console.log("3: " + c);
}
// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let string = "Python";
if (string.substr(0, 2) === "Py") {
    console.log("4: " + string)
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50..80 print 65 other wise print 80. 
let calCulate = a + b;
if (calCulate >= 50 && calCulate <= 80) {
    console.log("5: " + 65);
} else {
    console.log("5: " + 80);
}

// 6. Check whether the sum of two integers is 8 or whether their difference is 8. If one of these is the case, print true.
if ((a + b) === 8 || (a + 8) === b || (a - 8) === b) {
    console.log("6: " + true);
}

// 7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, print true. 
if ((a + b) === 15 || a === 15 || b === 15) {
    console.log("7: " + true);
} else {
    console.log("7: " + false);

}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if ((a % 7) === 0 || (b % 11) === 0) {
    console.log("8: " + true);
} else {
    console.log("8: " + false);
}

// 9. Calculate the sum of the two given integers. If the two values are same, then print triple their sum.
let sum = a + b;
if (a === b) {
    console.log("9: " + sum * 3);
} else {
    console.log("9: " + a, b);

}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
if ((b - 19) > 19) {
    console.log("10: " + (b - 19) * 2);
} else {
    console.log("10: " + (b - 19));
}


