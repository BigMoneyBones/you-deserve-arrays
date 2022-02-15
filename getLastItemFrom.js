const prompt = require('prompt-sync')({sigint: true});

//Prompt the user for an array input
let userArray = JSON.parse(prompt("Enter an array: "));

//Assigns the first and last items in the array to a variable
let firstItem = userArray[0];
let arrayLength = userArray.length;
let lastItem = userArray[arrayLength-1];

//Prints message with variable to screen.
console.log("The first item in this array is: " + firstItem);
console.log("The last item in this array is: " + lastItem);

