/*Các module hệ thống có sẵn */

var fs = require('fs');

// doc File
var text = fs.readFileSync('./abc.txt', {encoding: 'utf8'});
console.log(text);

// Ghi File
fs.writeFileSync('./song.txt','Hello, I;m a student');
fs.writeFileSync('song2.txt', 'Hello, Nguyen Hue Linh');