// Returning curring date and time
const now = Date();
console.log("1:", now);

// Create a new Object
const today = new Date();
console.log("2:", today);

// get the month.  [Januari, ... , December]
const rightNow = new Date().getMonth() + 1;
console.log("3:", rightNow);

// get the year
const year = new Date().getFullYear();
console.log("4:", year);

//get the hour (actuall hour)
const hours = new Date().getHours();
console.log("5:", hours);

// Get the day of the week [sunday, ... , saterday]
const day = new Date().getDay();
console.log("6", day);

// Get todays date (actual date)
const nowToo = new Date().getDate();
console.log("7", nowToo);

//Write an if/else statment, logging the current season from the getMonth Method
const showSeason = new Date().getMonth() + 1;

if (showSeason === 12 || showSeason === 1 || showSeason === 2) {
    console.log("8: It is winter in Berlin");
} else if (showSeason === 3 || showSeason === 4 || showSeason === 5) {
    console.log("8: It is Spring in Berlin");
} else if (showSeason === 6 || showSeason === 7 || showSeason === 8) {
    console.log("8: It is Summer in Berlin");
} else {
    console.log("8: It is Autumn in Berlin");
}

//8: or
const winter = showSeason === 12 || showSeason === 1 || showSeason === 2;
const spring = showSeason === 3 || showSeason === 4 || showSeason === 5;
const summer = showSeason === 6 || showSeason === 7 || showSeason === 8;
if (winter) {
    console.log("or: It is winter in Berlin");
} else if (spring) {
    console.log("or: It is Spring in Berlin");
} else if (summer) {
    console.log("or: It is Summer in Berlin");
} else {
    console.log("or: It is Autumn in Berlin");
}
//8: 0r
if (showSeason <= 2 || showSeason === 12) {
    console.log("or: winter");
} else if (showSeason <= 5) {
    console.log("or: Spring");
} else if (showSeason <= 8) {
    console.log("or; Summer");
} else if (showSeason <= 11) {
    console.log("or: Autumn");
}



