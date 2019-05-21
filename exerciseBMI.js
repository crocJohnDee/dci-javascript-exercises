// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables.
let johnMass = 90;
let johnHeight = 1.91;

let markMass = 200;
let markHeight = 1.94;

// 2. Calculate both their BMIs and store their BMIs in variables. 
let johnBmi = johnMass / (johnHeight * johnHeight);
let markBmi = markMass / (markHeight * markHeight);

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let markBiggerJohn = markBmi > johnBmi;

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? true"). 
console.log(`Is Mark's BMI higher than John's? ${markBiggerJohn}`);

// 5. Create an if statement which prints the name and BMI of the person with the highest BMI. 
if (markBmi > johnBmi) {
    console.log(`Mark has higher BMI than John with a BMI of ${markBmi}`);
} else {
    console.log(`John has higher BMI than Mark with a BMI of ${johnBmi}`);
}


