
// #CONSOLE.LOG EXERCISES: Getting Started 

// These exercises are aimed at making you familiar with using node to run your scripts & the console.log method. For each exercise, run your script in node to check if your console.log(s) are working. Remember to use camelCase where needed.

// Make your own JavaScript file and work from there. Open up your terminal in VS Code.  

//1 Console log a line of text eg. "this is an exercise in console logging". (do not forget quotation marks). 
console.log("1: " + "this is an exercise in console logging");

//2 Declare a variable and give your variable the following value: "This is the value.". Console log your **variable**.
let string = "This is the value.";
console.log("2: " + string);

//3 Declare a variable called firstName and assign your first name to that variable. Do they same with your last name. Console log both variables. NOTE: When console logging two variables, separate the variables with a comma (,) in the console log e.g. console.log(variable1, variable2);
let firstName = "Johnny";
let lastName = " Barendrecht";
console.log("3: " + firstName, lastName);


//4 Make a profile of someone's information. Store all the information in variables eg. name, city, job etc. (five variables total) Console log the variables. 
let name = "Piet";
let age = 30;
let job = "Developer";
let city = "Rotterdam";
let hobby = "Arduino";

console.log("4: " + name, age, job, city, hobby);

//5 Print the sentence "John Smith is a 43 year old teacher who lives in Berlin" using variables (where possible) and text. **you can combine variables with text in the console by using the plus symbol (+) e.g. console.log("this is a " + variable);**
console.log("5: " + name + " is a " + age + " year old " + job + " from " + city + ". And he loves to play with his " + hobby);