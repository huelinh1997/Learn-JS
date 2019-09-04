// node co
var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
			if(err) {
				reject(err);
			}
			else resolve(data);
		});
	});
} 

// Cach dung thu nhat cua node Co    (https://repl.it/@huelinh/FlawedAmusedWorkers) 
// co(function*() { // generator function
// 	// var song1 = yield readFilePromise('./song1.txt');
// 	// var song2 = yield readFilePromise('./song2.txt');
// 	// var song3 = yield readFilePromise('./song3.txt');
// 	// //console.log(song1, song2, song3);
// 	// return [song1, song2, song3];
// 	var value = yield [
// 		readFilePromise('./song1.txt'),
// 		readFilePromise('./song2.txt'),
// 		readFilePromise('./song3.txt')];
// 	return value; // trả về 1 promise 
// }).then(function(value) {
// 	console.log(value);
// }).catch(function(err) {
// 	console.log(err);
// });

// cách dùng thứ 2   (https://repl.it/@huelinh/StainedMarvelousLinuxkernel)
// co có 1 method là wrap 
// co.wrap(); Khong tra ve 1 promise ma tra ve 1 ham
var readFiles = co.wrap(function*(files) { // files là 1 array đường dẫn đến file 
	// [String] => [Promise]
	var value = yield arrPath.map((file) => readFilePromise(file));
	return value;
});
readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
	.then(function(value) {
		console.log(value);
	});