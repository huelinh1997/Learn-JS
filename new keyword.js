// new keyword
//var today = New Date();
// Create a new Object, object literal
var mouse = {
	weight: 2,
	getWeight: function(){
		return this.weight;
	}
};

// Constructor function
function Mouse(color){
	this.type = 'mouse';
  this.color = color;
}
var mouse1 = new Mouse('red');
var mouse2 = new Mouse('green');
var mouse3 = {type: 'mouse'};
console.log(mouse1);
console.log(mouse2);
//console.log(mouse3);

/*SO SANHS GIỮA CONSTRUCTOR FUNCTION with NORMAL FUNCTION: BÀI 26 (prototype)*/
//==================================
var tom = {
	name: 'Tom',
	stomach: [], // dạ dày
	eat: function(mouse){
		this.stomach.push(mouse);
		return this;
	}
};
// thay thế cách khai báo dưới bằng cách dùng constructor function
// var m1 = {name: 'm1'};
// var m2 = {name: 'm2'};
// var m3 = {name: 'm3'};

// Constructor function
function Mouse(name){
	this.name = name;
}
var m1 = new Mouse('m1');
var m2 = new Mouse('m2');
var m3 = new Mouse('m3');

tom.eat(m1).eat(m2).eat(m3); // Method chaining: goi nhieu lần trên 1 object dc


