const cities = ["Rome", "Amsterdam", "Florida", "Aleppo", "Kerkira"];
console.log(cities);

//Add to the back of array
cities.push("Utrecht");
console.log(cities);

// Remove from back of Array
cities.pop();
console.log(cities);

// Remove from beginning
cities.shift()
console.log(cities);

// Add to the first of an array
cities.unshift("Darsalaam");
console.log(cities);

// swap with bracket notation
cities[2] = "Skagen";
console.log(cities);


//1: Create a ToDo list with at least 5 items. Print the first and second to last item
const toDos = ["cook", "clean", "wash", "eat", "sleep"];
console.log(`1: Todo: ${toDos[0]} and ${toDos[toDos.length - 2]}`);



// 2: Replace The Second Item in your Array, Then add a new item to the end and remove the first item.
const numbers = [53, 213, 123, 34, 5642, 123];
numbers[1] = 15;
numbers.push("five hundred");
numbers.shift();
console.log(`2: ${numbers}`);