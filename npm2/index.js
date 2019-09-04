var readlineSync = require('readline-sync');

// var username = readlineSync.question('May I have your name?');
// console.log('Hi, ' + username + '!');

// var languages = [];
// var language = readlineSync.question('What is your mother languages? ');
// languages.push(language);
// console.log(languages);

var pet ={};
var name = readlineSync.question('Pet name: ');
var gender = readlineSync.question('Gender: ');
var weight = readlineSync.question('Gender: ');
pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);
console.log(pet);
