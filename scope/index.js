// scope : PHạm vi hoạt động của 1 biến 
// 1. Global scope : Khi 1 biến nằm trong Global scope nghĩa là nó ko nằm trong hàm nào cả
// 2. Local scope : Mỗi hàm khi được chạy tạo ra 1 scope, 
                 // Những biến được khai báo bên trong hàm đấy thì thuộc scope của hàm đấy hay gọi là Local scope 
// When a function is excuted  -> create a new scope

var a = 1 // a thuoc GLobal scope

function random() {
	var b = Math.random(); // b nam trong Local scope cua ham random khi ham random thuc thi
}