// array filter : tạo 1 mảng mới bằng cách lọc, 
//                mảng mới thay đổi về số lượng, nếu ko thỏa mãn filter function thì ko cho qua
var numbers = [1, 2, 3, 4];
var evenNumbers = numbers.filter(function(item){
  return item % 2 === 0; // return true, false
});

evenNumbers;