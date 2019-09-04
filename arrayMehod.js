// Các Method của 1 array
// - a.concat(b)
// - a.push(b)
// - a.pop()
// - a.shift()
// - a.unshift()
// Tự đọc MDN (Mozilla Developer Network)
// Google keyword: array method
// - a.slice
// - a.splice
// find, filter, sort, map, reduce, etc...

// a.concat(b) :  nối 2 mảng
var a = [1, 2, 3, 6, 7, 9];
var b = [4, 5];
// khi nối thì a và b vẫn ko thay đổi, mà tạo ra một mảng mới, vì vậy để lưu mạng đó ta cần khai báo, ví dụ như sau, gán c = mảng mới nối.
//var c = a.concat(b); // nối mảng b vào sau mảng a


// a.push() : thêm phần tử vào cuối mảng
//var c = 5;
//a.push(c); // trả về length của mảng a sau khi push
//a; // hiển thị mảng mới là [1, 2, 3, 6, 7, 9, 5]


// a.pop()  : đẩy phần tử cuối mảng ra
//var c = a.pop(); // trả về giá trị bị đẩy ra, ở đây giá trị bị đẩy ra là 9 nên sẽ hiển thị kết quả là 9
//a; // hiển thị mảng mới là [1, 2, 3, 6, 7]
//c;


// a.shift()  : (Tương tự pop) Đẩy phần tử đầu mảng ra
//var c = a.shift(); // Hiển thị phần tử bị đầy ra là 1
//c;
//a; // hiển thị mảng mới là [2, 3, 6, 7, 9]




// a.unshift() : (tương tự push ) Thêm phần tử vào đầu mảng
//var c = a.unshift(5); // Trả về độ dài mới của mảng sau khi thêm, kêt quả là 7
//c;
//a; // Hiển thị mảng mới [5, 1, 2, 3, 6, 7, 9]


// a.slice(n1, n2);   Trả về bản sao của mảng từ phần tử n1 đến n2, ko tính n2

// var cop = a.slice(1, 4); // biến cop trả vê bản sao sau khi sao chép
// console.log(cop); // Trả về [ 2, 3, 6 ]

// //mảng a ko thay đổi
// console.log(a); // trả về: [ 1, 2, 3, 6, 7, 9 ]

// var cop2 = a.slice(3); // sao chép từ phần tử thứ 3 trở đi
// console.log(cop2); // Trả về [ 6, 7, 9 ]




// a.splice(n1, n2, n3)

// var removed1 = a.splice(1, 0, 5);
// // removed trả về phần tử bị removed khỏi mảng, nếu ko có pt nào removed sẽ trả về xâu rỗng
// console.log(removed); // trả về : []
// // Mảng a trả về mảng sau khi loại bỏ/ thay thế/ thêm phần tử
// console.log(a);  // Trả về: [1, 5, 2, 3, 6, 7, 9]

// var removed2 = a.splice(4, 2, 8);
// console.log(removed2); // Trả về: [ 6, 7 ]
// console.log(a); // Trả về [ 1, 5, 2, 3, 8, 9 ]

// var removed3 = a.splice(3); // xóa từ phần tử thứ 3 trở đi
// console.log(removed3); // Trả về: [ 3, 8, 9 ]
// console.log(a); //Trả về [ 1, 5, 2 ]


