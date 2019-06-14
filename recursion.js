// // recursion 

// let counter = 5;

// while (counter > 0) {
//     console.log(counter--);
// }


// let countDown = function (v) {
//     if (v > 0) {
//         console.log(v);
//         return countDown(v - 1) //function calls itself 
//     } else {
//         return v
//     }
// }

// console.log(countDown(5));

//======================================================================================0

//Factorial recursion

const factor = num => num <= 1 ? 1 : num * factor(num - 1);

const factor2 = num => {

    if (num <= 1) {
        return 1
    } else {
        return num * factor2(num - 1);
    }
}




console.log(factor(5));
console.log(factor2(15));

