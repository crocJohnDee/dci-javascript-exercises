//1: Create a variable and assign a number to it. Then create an if/else statement to check if the number is a intiger or a float. If it is a float print "Coffee" if its a float print "Triple espresso"
let num = 14.9;

if (num % 1 == 0) {
    console.log("1: Coffee");
} else {
    console.log("1: Triple espresso");
}

// Or
if (num === Math.floor(num)) {
    console.log("1: Coffee");
} else {
    console.log("1: Triple Espresso");
}



//2: create a random number between 1 and 5. For every different number you print a different string ("random number is 3")
let random = Math.floor(Math.random() * 5) + 1;

if (random === 1) {
    console.log("2: One love");

} else if (random === 2) {
    console.log("2: two beer");

} else if (random === 3) {
    console.log("2: three little birds");

} else if (random === 4) {
    console.log("2: four out the door");

} else if (random === 5) {
    console.log("2: High Five");

}


