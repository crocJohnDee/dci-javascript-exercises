const person = {
    name: "Johnny",
    age: 30,
    nationality: "Dutch",
    adress: {
        street: "kijkplein",
        plz: 23424,
        city: "Berlin"
    },
    lovesCoding: true
}

const myAge = person.age;
const myPlz = person.adress.plz;

const movies = {
    title: "Amadeus",
    director: "Milos Forman",
    releaseYear: 1984
}

console.log(`${movies.title} directed by ${movies.director}`);
movies.title = "Man on the moon"
console.log(`${movies.title} directed by ${movies.director}`);



//My name is Johnny, I am 30 years old and live in Berlin
console.log(`My name is ${person.name}, I am ${person.age} years old and live in ${person.adress.city}`);
//My name is Johnny, I am 20 years old and live in my closet
console.log(`My name is ${person.name}, I am ${person.age - 10} years old and live in ${person.adress.city = "my closet"}`);

const movieList = {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    yearReleased: 1972,
    basenOnBook: true
}


const movieList2 = {
    title: "Mama Roma",
    director: "Pier Paolo Pasolini",
    yearReleased: 1962
}

const getMovies = movie => console.log(`${movie.title} directed by ${movie.director}`);

getMovies(movieList);
getMovies(movieList2);

//returning all the keys in an object as an array
console.log(Object.keys(movieList2));

//The 2 data tpes in javascript
// Objects(as complex as you want)
// function, arrays ()

// --Primitives 
//     - Number
//     - String
//     - Boolean
//     - undifined
//     - null
//     - Symbol
// If its not a primitive, its a Object
// primitives are the building blocks og Objects

//comparisons
// true === false
//    1 === 1

// PRIMITIVES - if it looks the SyncManager, it probably is the same

//When you create a object, JS saves it at a unique locatin in memory
// {} === {}  => false
// When you compare primitives, JS only cares about the value
//Comparing OBJECTS , we refer REFFERANCES - JS only cares about the refferance in memory

const myHouse1 = { color: "blue" }
const myHouse2 = myHouse1;
myHouse1.color = "red";

console.log(myHouse1);
console.log(myHouse2);



