//functions = input(arguments). code. output(return/value)

//example 1 function declaeration
function greeting(firstName, lastName) {
    return "Hello " + firstName;
}
console.log("e1:", greeting("Nick"));


//example 2 function decleration
const adder = function (a, b) {
    return a + b;
}
console.log("e2:", adder(200, 150));

//example 3 undifined for variable
let square = function (num) {
    console.log("e3:", num);
}
square()

//example 4 default arguments
let leaderBoard = function (name = "Hans Fallada", score = 0) {
    return `${name} - ${score}`
}
let match = leaderBoard(undefined, 100);
console.log("e4:", match);

//example 5 Arrow function
const adder2 = (a, b) => a + b;
console.log("e5:", adder2(50, 25));

//practice 1 weight earth to Moon
function weightOnMoon(kg) {
    console.log("practice 1", (kg * 1.622 / 9.81).toFixed(2));
    return (kg * 1.622 / 9.81).toFixed(2);
}
weightOnMoon(100);

//practice 1.1 weight earth to Moon in arrow function
const weightOnMoon2 = kg => console.log("practice 1.1", (kg * 1.622 / 9.81).toFixed(2));
weightOnMoon2(100);

//Task 1: Write a factorial function
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result
}
console.log("task 1: ", factorial(5000));


const factorial2 = num => num ? (num * factorial2(num - 1)) : 1;
console.log("task 1.1: ", factorial2(5000));


//Task 2 :Write a function that accepts several parameters and calculates the amount of money that will have been saved as a pension until a person retires. The parameters that should be defined are:
//
// The current age of the person // ex. 40
//
// The age that the person collects the pension // ex. 60
//
// The monthly wage the person earns // ex. 1000
//
// The percentage (as integer)  that the person saves each month // ex. 10%
//
// If the person has already retired then the message 'Calculate your past memories' should be printed.
//
// If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
//
// Example: A lady is 40 years old, she retires at 65, she earns 2000€ per month and she saves  5% of it. How much money will she have saved until she retires? // This case is 30.000

function retires(age, collect, wage, save) {
    let yearsToRetire = collect - age;
    let savingPerYear = wage * (save / 100) * 12;
    let totalSaving = yearsToRetire * savingPerYear;

    if (typeof age != "number" ||
        typeof collect != "number" ||
        typeof wage != "number" ||
        typeof age != "number") {
        return "task 2: Please use integers";

    } else if (age >= collect) {
        return "task 2: Calculate your past memories";

    } else if (yearsToRetire === 1) {
        return `task 2: you have to work ${yearsToRetire} more year, before you can collect your ${totalSaving}`;

    } else {
        return `task 2: you have to work ${yearsToRetire} years, before you can collect your ${totalSaving}`;

    }

}

console.log(retires(64, 65, 1800, 10));

const retires2 = (age, collect, wage, save) => {
    let yearsToRetire = collect - age;
    let savingPerYear = wage * (save / 100) * 12;
    let totalSaving = yearsToRetire * savingPerYear;
    let check = age + collect + wage + save;

    if (typeof check != "number") {
        return "task 2.1: Please use integers";

    } else if (age >= collect) {
        return "task 2.1: Calculate your past memories";

    } else if (yearsToRetire === 1) {
        return `task 2.1: you have to work ${yearsToRetire} more year, before you can collect your ${totalSaving}`;

    } else {
        return `task 2.1: you have to work ${yearsToRetire} years, before you can collect your ${totalSaving}`;
    }
}
console.log(retires2(30, 65, 1800, 20));


function isTruthy(input) {

    let falsy = [false,
        null,
        undefined,
        0,
        NaN,
        ""]
    for (let i = 0; i <= falsy.length; i++) {
        if (input.includes(falsy[i])) {
            return 0
        } else {
            return 1
        }

    }


}



//Pure functions, cause its not relying on any other
const add = (a, b) => a + b;

// Not pure function, because it relies on other variables
const myName = "max";
// const sayName = mySurname => `${myName} ${mySurname}`
// console.log(`pf1: ${sayName("Kaise")}`);


//Now it is a pure function
const sayName = (myName, mySurname) => `${myName} ${mySurname}`
console.log(`pf1: ${sayName("Kaise", "marmalade")}`);



//rest params  ...args
const restArr = (...args) => {
    if (args[2]) {
        return "rp1: I have a third argument";
    }
    return "rp1: NEIN! No third argument"
}

console.log(restArr(1, 2, 3));
console.log(restArr(1, 3));

const area = (...args) => {
    switch (args) {
        case args[0]:
            return "No Comprendo";
            break;
        case args[1]:
            return `${args[0] * args[1]}M2`
            break;
        case args[2]:
            return `${args[0] * args[1] * args[1]}M3`
            break;
    }
}

console.log(area(10, 10));
