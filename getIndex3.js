const prompt = require('prompt-sync')({sigint: true});

//Prompt the user for an array input
let userArray = JSON.parse(prompt("Enter an array: "));

//Assigns the first and last items in the array to a variable
let firstItem = userArray[0];
let thirdIndex = userArray[3];
//Assigns a variable to the length of the array.
let arrayLength = userArray.length;
//Assigns a variable to the last item in the array.
let lastIndex = userArray[arrayLength-1];

//Prints message with variable to screen.
//console.log("The first item in this array is: " + firstItem);
//console.log("The last item in this array is: " + lastItem);

//If the array is at least 4 items, the console output will show the third index || 4th listed item. 
/*Remember the array starts with '0' being the first index. */
if (arrayLength >= 4) {
    console.log("The third index in this array is: " + thirdIndex);
} else { //If the array is less than 4, the last index in the array will be logged.
    console.log("The last index in the array is: " + lastIndex);
} 
