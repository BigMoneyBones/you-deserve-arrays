const prompt = require('prompt-sync')({sigint: true});

//Sets the prompt to ask for user input to be an array. ie: [x,y,z]
let userArray = JSON.parse(prompt("Enter an array: "));

//Sets a variable for the length of the array.
let userArrayLength = userArray.length;
//sets a boolean statement to be true/false depending on user input.
let boolean = userArrayLength >= 10;

//If user input is >= 10 then statement will read true, <=10 will read false.
console.log(boolean);

//*** Another solution using if statements ***//

// if (userArray = boolean) {
//     console.log(boolean);
// } else {
//     console.log(boolean);
// }
