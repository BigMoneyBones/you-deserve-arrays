const prompt = require('prompt-sync')({sigint: true});

//Prompt the user for an array input
let userArray = JSON.parse(prompt("Enter an array: "));

//Assigns the first item in the array to a variable
let firstItem = userArray[0];

//Prints message with variable to screen.
console.log("The first item in this array is: " + firstItem);

