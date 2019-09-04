// JSON object
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert an JSON string to an object

// var myDog = {name: 'Milu', age: 1, dead: false};
// console.log(typeof myDog);
// var myDogString = JSON.stringify(myDog);
// console.log(typeof myDogString);

var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);

// Exercise
// 1. Show all student
// 2. Create a new student
// 3. Save & exit