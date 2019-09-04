// Promise, là 1 constructor function, có thể tạo ra 1 đối tượng mới như sau: var promise = new promise();
// Giới thiệu module sử dụng promise: promise-fs 
var fs = require('promise-fs');

function onDone(song) {
	console.log(song);
}

function onErr(err) {
	console.log(err);
}

function readFile(path) {
	return fs.readFile(path,  {encoding: 'utf8'});
}

// readFile này trả về 1 promise, promise được tạo ra có 2 method chính là .then và .catch 
//fs.readFile('song1.txt', {encoding: 'utf8'})  // ko co call back nhu readFile ko dong bo
readFile('song1.txt')
	.then(onDone)
	.then(function() {
		return readFile('song2.txt');
	})
	.then(onDone)
	.catch(onErr);
