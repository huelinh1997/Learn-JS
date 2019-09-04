// array.find : tìm phần tử đầu tiên thỏa mãn function được truyền vào
// (Lọc các phần tử trong mảng cho đến khi phần tử đó true thì trả về 1 phần tử đó)
var numbers = [1, 2, 3, 4];
numbers.find(function(item){
	return item % 2 === 0;
});
// Ket qua tra ve so 2
