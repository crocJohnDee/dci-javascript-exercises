// #Conditionals Exercises P2
// **Print your results to the console**

// 1. Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a boy/girl". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young man/woman". If none of these conditions apple, print "firstName is a man/woman". 
let firstName = "Johnny";
let age = 30;
if (age < 13) {
    console.log(`1: ${firstName} is a boy`);
} else if (age >= 13 && age < 20) {
    console.log(`1: ${firstName} is a teenager`);
} else {
    console.log(`1: ${firstName} is a man`);
}

// 2. John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
// > Calculate the average score for each team.
// > Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// > Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// > Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
// > Like before, change the scores to generate different winners, keeping in mind there might be draws.
let gamesPlayed = 3;
let mikeAvrg = ((186 + 105 + 123) / gamesPlayed).toFixed();
let johnAvrg = ((120 + 120 + 101) / gamesPlayed).toFixed();
let maryAvrg = ((97 + 131 + 175) / gamesPlayed).toFixed();


if (johnAvrg < mikeAvrg && maryAvrg < mikeAvrg) {
    console.log(`2: Team Mike with an avarage of ${mikeAvrg} points`);

} else if (mikeAvrg < johnAvrg && maryAvrg < johnAvrg) {
    console.log(`2: Team John with an avarage of ${johnAvrg} points`);

} else if (johnAvrg < maryAvrg && mikeAvrg < maryAvrg) {
    console.log(`2: Team Mary with an avarage of ${maryAvrg} points`);

} else if ((mikeAvrg && johnAvrg) > maryAvrg) {
    console.log(`2: Team Mike and team John both won with ${mikeAvrg} points`);

} else if ((maryAvrg && johnAvrg) > mikeAvrg) {
    console.log(`2: Team Mary and team John both won with ${johnAvrg} points`);

} else if ((mikeAvrg && maryAvrg) > johnAvrg) {
    console.log(`2: Team Mike and team John both won with ${maryAvrg} points`);

} else {
    console.log(`2: All teams scored an avrage of ${mikeAvrg} points`);
}

// 3. Calculate the student average mark and then give the student a grade.

// student marks = 90, 64, 75, 83, 80, 55

// - A+ if the average is greater than 90. 
// - A if the average is greater than 80 and less than or equal to 90	. 
// - B+ if the average is greater than 70 and less than or equal to 80. 
// - B if the average is greater than 60 and less than or equal to 70. 
// - C+ if the average is greater than 50 and less than or equal to 60. 
// - C if the average is greater than 40  and less than or equal to 50. 
// - D if the average is greater than 30 and less than or equal to 40. 
// - F if the average is less than or equal to 30.

let studAvrg = (90 + 64 + 75 + 20 + 80 + 55) / 6;


if (studAvrg > 90) {
    console.log(`3: A+`);
} else if (studAvrg > 80 && studAvrg <= 90) {
    console.log(`3: A`);

} else if (studAvrg > 70 && studAvrg <= 80) {
    console.log(`3: B+`);

} else if (studAvrg > 60 && studAvrg <= 70) {
    console.log(`3: B`);

} else if (studAvrg > 50 && studAvrg <= 60) {
    console.log(`3: C+`);

} else if (studAvrg > 40 && studAvrg <= 50) {
    console.log(`3: C`);

} else if (studAvrg > 30 && studAvrg <= 40) {
    console.log(`3: D`);

} else if (studAvrg <= 30) {
    console.log(`3: F`);
}

// 4. Make an if/else statement depending on the weather today!
// Create a variable named "temperature" and "weather".
// Then, create outputs based on the variable values e.g.
// if ((temperature > 15) && (weather === 'sunny') {
//     console.log(`It is ${temperature} degrees outside and ${weather}`.
// }

// Do this for sunny weather, rainy weather, snow and an overcast sky.
let weather = ["sunny", "raining", "overcasted", "snowing"];
let temperature = 25;

if (temperature > 25) {
    console.log(`4: It is ${temperature} degrees outside and ${weather[0]}`);

} else if (temperature > 15 && temperature <= 25) {
    console.log(`4: It is ${temperature} degrees outside and ${weather[1]}`);

} else if (temperature > 5 && temperature <= 15) {
    console.log(`4: It is ${temperature} degrees outside and ${weather[2]}`);

} else if (temperature <= 5) {
    console.log(`4: It is ${temperature} degrees outside and ${weather[3]}`);

}


// 5. Make an if/else statement depending on a person's job. 
// Create two variables "firstName" and "job". 
// Print different outputs depending on the value of "job" eg. "Maria is a teacher in Berlin" / "Maria is a designer in Berlin". 
// Make 5 different possible outcomes depending on the value of job.
let jobArr = ["Developer", "Astronaut", "turtle-sitter", "statue", "cup of coffee"];
let job = "cup of coffee";

if (job === jobArr[0]) {
    console.log(`5: ${firstName} is a ${jobArr[0]} in Berlin`);

} else if (job === jobArr[1]) {
    console.log(`5: ${firstName} is a ${jobArr[1]} in Berlin`);

} else if (job === jobArr[2]) {
    console.log(`5: ${firstName} is a ${jobArr[2]} in Berlin`);

} else if (job === jobArr[3]) {
    console.log(`5: ${firstName} is a ${jobArr[3]} in Berlin`);

} else if (job === jobArr[4]) {
    console.log(`5: ${firstName} is a ${jobArr[4]} in Berlin`);
}

// 6. Determine whether a given year is a leap year in the Gregorian calendar. 

let year = 1585;

if (year % 4 === 0) {

    if (year % 100 === 0) {
        console.log(`6: ${year} is not a leap year`);
    } else if (year % 400 === 0 || year % 4 === 0) {
        console.log(`6: ${year} is a leap year`);
    }

} else if (year % 4 != 0) {
    console.log(`6: ${year} is not a leap year`);
}





// 7. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5". If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz". If none of the above apply, print the number.
let num = 3;
let fizz = ((num % 3) === 0);
let buzz = ((num % 5) === 0);
let fizzbuzz = ((num % 3) === 0) && ((num % 5) === 0);

if (fizzbuzz) {
    console.log(`7: FizzBuzz`);

} else if (fizz) {
    console.log(`7: Fizz`);

} else if (buzz) {
    console.log(`7: Buzz`);

} else {
    console.log(`7: ${num}`);
}


