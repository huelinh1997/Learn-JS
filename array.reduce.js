// array.reduce
var numbers = [1, 2, 3, 4];
numbers.reduce(function(a, b){
	return a + b;
});

var orders = [
	{name: 'A', quantity: 2, unitPrice: 100},
	{name: 'B', quantity: 1, unitPrice: 400},
	{name: 'A', quantity: 5, unitPrice: 15}
];
// Dung reduce de tinh tong cua don hang
function totalPrice(arr){
  var itemPrice = arr.map(function(item){
    return item.quantity * item.unitPrice;
  });
	var total = itemPrice.reduce(function(a, b){
    
		return a + b;
	});
	return total;
}

totalPrice(orders);

//======================================================
var item = ['Tom', 'Bill', 'Kim'];
// 1. use reduce to make this result '<Tom><Bill><Kim>'
// 2. Use map & join to solve the problem

// 1. use reduce
function merge(arr){
	var merge = item.reduce(function(a, b){
		return a + '<' + b + '>' ;
	},'' );
  return merge;
} 
merge(item);

// 2. use map & join
function merge(arr){
	var merge = item.map(function(item){
		return '<' + item + '>' ;
	});
  var str = merge.join('');
  return str;
} 
merge(item);