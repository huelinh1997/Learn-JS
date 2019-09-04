// array.soft
//Syntax: array.sort(function(a, b){}) => return a sorted array
// if sort function
// return a values < 0, a will come before b
// return a values > 0, a will come after b
// return 0, a and b will stay unchanged
var numbers = [2, 9, 3, 4, 1];
var acendingNumbers = numbers.sort(function(a, b){
	return a - b;
});
console.log(acendingNumbers);
var acendingNumbers = numbers.sort(function(a, b){
  // a = 9, b = 3
	return b - a;
});
console.log(acendingNumbers);
//=========================================================
var employees = [
	{name: 'Lan', age: 23},
	{name: 'Mai', age: 25},
	{name: 'Huong', age: 21}
];

var sortedEmployess = employees.sort(function(a, b) {
	return a.age - b.age;
});
console.log(sortedEmployess);

//=========================================================

// 1. Define an array of product (name, price, stock)
// 2. Sort by price from more expensive to less expensive
// 3. Sort by in stock value from more expensive to less expensive

var products = [
  {name: 'Soap', price: 15, stock: 20}, // 300
  {name: 'brush', price: 10, stock: 50}, // 500
  {name: 'glass', price: 20, stock: 30}, // 600
  {name: 'carpet', price: 30, stock: 15} // 450
]
// Sort by price from more expensive to less expensive
var sortPrice = products.sort(function(a, b) {
  return b.price - a.price;
});
console.log(sortPrice);
console.log('====================');

// Sort by in stock value from more expensive to less expensive
var sortStockValue = products.sort(function(a, b) {
  return b.stock * b.price - a.stock * a.price;
});
console.log(sortStockValue);