// ternary operator
// Syntax:
// Condition ? expression when true : expression when false
function tossCoin() {
	var value = Math.random();
	var result = (value < 0.5) ? 'Mat sap' : 'Mat ngua';

	// if(value < 0.5) {
	// 	result = 'Mat sap';
	// }
	// else {
	// 	result = 'Mat ngua';
	// }

	console.log(result);
}
tossCoin();