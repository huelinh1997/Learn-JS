// setInterval
// clearInterval
// setInterval(fn, ms) sau mỗi khoảng ms thì nó gọi hàm fn ra, ví dụ như sau: 
// var i = 0;
// var intervalID = setInterval(function() {
// 	++i;
// 	console.log(i);
// 	if( i === 10) clearInterval(intervalID);
// }, 1000);

// write a function count from a to b
// return a promise


function countFrom(a, b) {
	return new Promise(function(resolve, reject) {
		var intervalID = setInterval(function() {
			console.log(a++);
			if(a > b) {
				clearInterval(intervalID);
				resolve();
			}
		} ,1000);
	});
}

countFrom(1, 10).then(function() {
	console.log('Done');	
});