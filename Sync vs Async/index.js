var fs = require('fs');

// Sync(synchronous): Đồng bộ, chờ thực hiện xong 1 việc mới thực hiện tiếp việc khác
// Async (Asynchronous): Không đồng bộ, trong khi thực hiện 1 việc thì thực hiện việc khác để tiết kiệm thời gian 

// Sync 
// console.log('Start');
// var song1 = fs.readFileSync('./song1.txt', {encoding: 'utf8'});
// console.log(song1);
// var song2 = fs.readFileSync('./song2.txt', {encoding: 'utf8'});
// console.log(song2);
// console.log('end');

// Async
console.log('Start');
fs.readFile('./song1.txt', {encoding: 'utf8'}, function(err, data) {
	console.log(data);
})
console.log('End');


