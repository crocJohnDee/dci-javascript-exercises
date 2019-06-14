// The Container Problem
// Suppose you own a ship.
// This ship can carry up to 10.000 Kg in terms of weight.
// A merchant wants you to carry his goods with your ship.
// He has 500 containers and he wants you to carry as many as
// possible. All containers have an identifying number from 1
// to 500.
// The first 100 containers weight 10Kg each.
// The containers with number from 101 up to 200 (included)
// weight 20kg each.
// The containers with number from 201 up to 250 (included)
// weight 50kg each.
// The containers with number from 251 up to 300 (included)
// weight 100kg each.
// The containers with number from 301 up to 400 (included)
// weight 200kg each.
// The rest weight 500 Kg each.
// Put as many containers as possible without sinking your
// ship. Find a way to stop adding weight if you surpass the
// limit your ship can afford.
// Print to the console exact how many containers you have
// included to your ship and how much is the difference
// between the total weight of the containers and the weight
// your ship can afford (free available weight).


// const maxWeigth = 6754;
// let currentWeight = 0;
// let count = 0;
// let kilo = 0;

// let container10 = 100;


// while (container10 >= 1 && currentWeight < maxWeigth && count < 112) {
//     currentWeight += 10;
//     container10--;
//     count++;
//     kilo = 10;
// }

// let container20 = 100;
// while (container20 >= 1 && currentWeight < maxWeigth && count < 112) {
//     currentWeight += 20;
//     container20--;
//     count++;
//     kilo = 20;
// }

// let container50 = 50;
// while (container50 >= 1 && currentWeight < maxWeigth && count < 112) {
//     currentWeight += 50;
//     container50--;
//     count++;
//     kilo = 50;
// }

// let container100 = 50;

// while (container100 >= 1 && currentWeight < maxWeigth && count < 112) {
//     currentWeight += 100;
//     container100--;
//     count++;
//     kilo = 100;
// }

// let container200 = 100;
// while (container200 >= 1 && currentWeight < maxWeigth && count < 112) {
//     currentWeight += 200;
//     container200--;
//     count++;
//     kilo = 200;
// }

// let container500 = 100;
// while (container500 >= 1 && currentWeight < maxWeigth && count < 112) {
//     currentWeight += 500;
//     container500--;
//     count++;
//     kilo = 500;
// }


// let differance = currentWeight - maxWeigth;

// if (differance > 0) {
//     currentWeight -= kilo;
//     count--
// }
// let spareWeight = maxWeigth - currentWeight;

// console.log(`The current weight on the ship is ${currentWeight} KG with ${count} containers and ${spareWeight} KG to spare`);

let maxWeight = 10000;
let weightIncluded = 0;
let id = 0;
let weightNextContainer = 10;

while (maxWeight >= weightIncluded + weightNextContainer && id < 112) {

    if (id <= 100) {
        weightIncluded += 10;
        id === 100 ? weightNextContainer = 20 : weightNextContainer = 10
    } else if (id <= 200) {
        weightIncluded += 20;
        id === 200 ? weightNextContainer = 50 : weightNextContainer = 20
    } else if (id <= 250) {
        weightIncluded += 50;
        id === 250 ? weightNextContainer = 100 : weightNextContainer = 50
    } else if (id <= 300) {
        weightIncluded += 100;
        id === 300 ? weightNextContainer = 200 : weightNextContainer = 100
    } else if (id <= 400) {
        weightIncluded += 200;
        id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
    } else {
        weightIncluded += 500;
        weightNextContainer = 500;
    }
    //in case you want to see every step!
    // console.log(`${id} container included, the current Weight is {weightIncluded}. Remain weight is ${maxWeight - weightIncluded}!`)
    id++;
}

console.log(`I have included ${id} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`);
