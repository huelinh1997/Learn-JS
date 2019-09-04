var fs = require('fs');

function readFilePromise(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
			if(err) {
				reject(err);
			}
			else resolve(data);
		})
	});
}

readFilePromise('song1.txt')
	.then(function(song1) {
		console.log(song1);
	})
	.catch(function(err) {
		console.log(err);
	});

//  Module `request` dùng để tải về 1 đường dẫn nào đó.

//   https://repl.it/@huelinh/CandidQualifiedTask-1