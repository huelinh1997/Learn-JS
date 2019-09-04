/*Có 2 cách tạo Object mà chúng ta đã học:
1. Tạo bằng cách viết thủ công từng key value ra (hay còn gọi là object literal)
2. Khai báo bằng constructer function (dùng 1 cái nguyên mẫu để khai báo ra các object) */


/*Tất cả các function trong javascript khi được define ra đều có 1 cái prototype,*/
// Constructor function
function Mouse(color, weight){
	this.type = 'mouse';
	this.color = color;
	this.weight = weight;
}

Mouse.prototype.sleep = function(){
	/*console.log('Sleeping...');*/
	console.log(this.color + ' Sleeping...'); /*Trong prototype cũng có thể tham chiếu dc đến this*/
}
/*sleep là 1 method của prototype, mà prototype lại dc chia sẻ cho tất cả các 
  object được tạo ra bởi từ khóa new. nên các thuộc tính/method của prototype thì jerry cũng truy cập dc vào*/

var jerry = new Mouse('Orange', 20);
var mickey = new Mouse('Red', 15);
/*jerry.sleep();
mickey.sleep();*/


console.log(jerry.sleep === mickey.sleep) 
/*-> true, tức là cả 2 đang cùng trọ về 1 thằng được chia sẻ (prototype.sleep)
     Khi dùng cách này sẽ tiết kiệm được bộ nhớ hơn, bởi vì function chỉ dc khai báo 1 lần 
     nếu khai báo: this.sleep trong Mouse, thì mỗi lần tạo 1 object mới nó sẽ chiếm 
     1 phần bộ nhớ để nó lưu function lại*/