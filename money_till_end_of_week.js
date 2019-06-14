// Write a function that calculates how much money someone is going to earn until the end of the week by just accepting a number from 1to 7 that represents the days of the week. 
// (1 isfor Monday, 2 for Tuesday, etc 7 is for Sunday).Given someoneearns 10$ per hour and hisworking schedule is this:

// Monday: works 4hours
// Tuesday: works 6hours
// Wednesday: works 8 hours
// Thursday: works 10hours
// Saturday: works 2 hours
// Fridays and Sundays are days - off.

// For example: if we executecalculateRestOfWeekMoney(3) The number 3 is passed as argument indicates thattoday is Wednesday so we calculate from Wednesday(included) until Sunday.WithcalculateRestOfWeekMoney(4) we start counting from Thursday until Sunday etc.

const daysTillPay = (num) => {
    const weekArray = ["monday", "tuesday", "wednesday", "thursday", "fiday", "saterday", "sunday"];
    const hoursPerDay = [4, 6, 8, 10, 0, 2, 0];
    let sum = 0;

    num -= 1;
    hoursPerDay.splice(0, num)
    weekArray.splice(0, num)

    for (let i = 0; i < hoursPerDay.length; i++) {

        sum += hoursPerDay[i] * 10;
    }

    console.log(`You have ${weekArray.length} days to work before you get paid €${sum}`);

}
daysTillPay(3)


