// moment.js : https://momentjs.com/docs/
var moment = require('moment');

//khoi tao 1 moment object
// var now = moment(); // tra ve 1 object	
// console.log(now);

var now = moment('2017-06-07');
console.log(now);
console.log(now.fromNow());
var a = now.format('YYYY/MM/DD');
console.log(typeof(a));