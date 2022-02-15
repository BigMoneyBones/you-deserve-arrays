const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let item3 = userArray[2];
let char2 = item3[1];

if(typeof item3 === 'string') {
    console.log("The second character of the third item in this array is: " + char2);
} else {
    console.log("ERROR");
}