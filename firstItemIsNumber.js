const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let firstItem = userArray[0];
let notANum = false;

if (typeof firstItem === 'number') {
    notANum = true;
}
console.log(notANum);
