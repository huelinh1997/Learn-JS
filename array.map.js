// array method: tạo mảng mới thông qua transform function, mảng mới có chiều dài bằng mảng cũ
var numbers = [1, 2, 3, 4];
var squareNumbers = numbers.map(function(item){
	return item*item;
})
console.log(squareNumbers);

var rectangles = [
  {width: 10, height: 5},
  {width: 10, height: 20},
  {width: 5, height: 16},
]
// Dùng array.map() method để biến đổi rectangle thành 1 array mới gồm diện tích các hình trên

var recArea = rectangles.map(function(item){
  return item.width*item.height;
})
console.log(recArea);
