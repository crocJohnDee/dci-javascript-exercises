const myHomeTown = {
    city: "Chicago",
    country: "USA",
    population: 27000000,
    isCold: true,
    newComer: function (x) {
        return this.population + x
    }

}

//assign new properties
myHomeTown.state = "illinois";

//deleting properties
delete myHomeTown.isCold

console.log(myHomeTown);

//Testing our method
console.log(myHomeTown.newComer(1000));

for (let x in myHomeTown) {
    console.log(`${x} - ${myHomeTown[x]}`);

}

// array of objects
const movies = [
    {
        title: "Spartacus",
        Director: "Stanley Kubrick",
        isGood: true
    },
    {
        title: "Jaws",
        Director: "Steven Spieberg",
        isGood: true
    },
    {
        title: "Titanic",
        Director: "James Cameron",
        isGood: false
    }];

//for in loop
for (let i in movies) {
    movies[i].isGood ? console.log(`I love ${movies[i].title}`) : console.log(`${movies[i].title} sucks`)
}
//getting the length of an object
console.log(Object.keys(movies), Object.keys(movies).length);
console.log(Object.values(movies), Object.values(movies).length);


