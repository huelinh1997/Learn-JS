// setTimeout
// clearTimeout

// setTimeout(fn, ms); // fn: 1 hàm nào đó , ms: miliseconds
// sau khi chay het khoang thoi gian ms thi chay ham fn

console.log('Start');
// ham setTimeout tra ve 1 ID
var timeoutID = setTimeout(function() { // ham ko ten hay goi la anonymous function
	console.log('Finish');
}, 1000);
console.log('Done');
clearTimeout(timeoutID); /*(Xóa timer đã set trước đó)*/

// chay dong 7
// Gap setTimeOut, doi 1000ms
// chay dong 11
// sau 1000ms chay ham fn
// 
// 
// https://repl.it/@huelinh/IdioticTangibleInteger
