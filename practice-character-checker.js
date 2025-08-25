const readlineSync = require('readline-sync');

// Prompt user for a word or phrase
const userInput = readlineSync.question('Enter a word or phrase: ');

// Prompt user for an index number
const index = readlineSync.question('Enter an index number: ');

// Use bracket notation to access the character
const character = userInput[index];

// Print out the character
console.log(character);