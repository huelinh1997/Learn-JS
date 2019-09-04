// Cac module do minh built ra:

var Mouse = require('./mouse');
var Cat = require('./cat');

var mickey = new Mouse('red');
var jerry = new Mouse('orange');
console.log(mickey);
console.log(jerry);
var tom = new Cat();
tom.eat(mickey);
console.log(tom);
console.log(mickey);
console.log(jerry);