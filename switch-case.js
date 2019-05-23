// switch cases - Look and Learn
let x = 1;
switch (x) {
    case 0:
        state = "OFF";
        break;
    case 1:
        state = "ON";
        break;
    default:
        state = "stateless";
}
console.log(state);



let name = ["Jon", "Mark", "David", "Harry"];
switch (name[3]) {
    case "Jon":
        name = `The name is ${name[0]}`
        break;
    case "Mark":
        name = `The name is ${name[1]}`
        break;
    case "David":
        name = `The name is ${name[2]}`
        break;
    case "Harry":
        name = `The name is ${name[3]}`
        break;
    default:
        name = `The name is John Doe`
}
console.log(name);

