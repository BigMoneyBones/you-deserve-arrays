const prompt = require('prompt-sync')({sigint: true});

//Sets prompt type to be recognized as an array, not a 'string'
let userArray = JSON.parse(prompt("Enter an array: "));

//Declares a variable for the first item in the array.
let firstItem = userArray[0];
//Declares a boolean variable to be used.
let notANum = false;

//If the first item in the array is a number, log true, otherwise it will print false to screen.
if (typeof firstItem === 'number') {
    notANum = true;
}
//Logs false to screen if user input for the first item is not a number.
console.log("The first item in this array is a number: " + notANum);
