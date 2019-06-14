// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
//
// **Notes**
// * The string must contain an @ character.
// * The string must contain a . character.
// * The @ must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The . and the @ must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

const isValid = (str) => {
    let newStr = []

    str.includes("@") ? newStr = str.split("@") : false;

    return newStr[1] && newStr[0].length > 0 && newStr[1].includes(".") ? true : false
}

console.log(isValid("sdffsdfdf.com"));

