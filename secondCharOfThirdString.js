const prompt = require('prompt-sync')({sigint: true});

//Lets prompt know its looking for an array and not a 'string'
let userArray = JSON.parse(prompt("Enter an array: "));

//Declare a variable for the item at index[3] in the array.
//The number '2' is used because count starts at 0. ex: 0,1,2 -- '2' is the 3rd index.
let item3 = userArray[2];

//Declare a variable for the 2nd character in the 3rd item.
//The number '1' is used because count starts at 0. ex: 0,1,2 -- '1' is the 2nd char index.
let char2 = item3[1];


if(typeof item3 === 'string') { //If the third item is a string and not a number, it will log out the statement.
    console.log("The second character of the third item in this array is: " + char2);
} else { //If the third item is not a string, an error message will appear.
    console.log("ERROR");
}