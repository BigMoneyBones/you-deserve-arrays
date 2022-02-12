const prompt = require('prompt-sync')({sigint: true});

let userArray = prompt("Enter an array: ")

let firstItem = userArray[0];

console.log("The first item in this array is: " + firstItem);