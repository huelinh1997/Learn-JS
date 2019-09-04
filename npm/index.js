// npm - node package manager
var readlineSync = require('readline-sync');
// var username = readlineSync.question('May I have your name? ');
// console.log('Hi '+ username + '!');

// var languages = [];
// var language = readlineSync.question('What is your mother language? ');
// languages.push(language);
// console.log(languages);

var pet = {};
var name = readlineSync.question('Your pet name? ');
var gender = readlineSync.question('Pet gender (male/female)? ');
var weight = readlineSync.question('Weight? ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);
console.log(pet);