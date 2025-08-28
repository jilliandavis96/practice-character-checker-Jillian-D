const input = require('readline-sync');

// Prompt user for a word or phrase
let userInput= input.question('Enter a word or phrase: ');

// Prompt user for an index number
let index = input.question('Enter an index number: ');

// Use bracket notation to access the character
let character = userInput[index];

// Print out the character
console.log(character);