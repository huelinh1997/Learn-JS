// date: https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Date

var now = new Date();
var myBirthday = new Date(1997, 3, 14); // 14/ 4/ 1997
var now1 = new Date();
var now2= new Date(860950800000);
var now3 = new Date('June 14, 2019 15:00:00');
var now4 = new Date('2019-06-14T15:00:00');
var now5 = new Date(2019, 5, 14);
var now6 = new Date(2019, 5, 14, 15, 05, 16, 11);
console.log(now1);
console.log(now2);
console.log(now3);
console.log(now4);
console.log(now5);
console.log(now6);


// number of miliseconds from 1-1-1970

// ket qua hien thi la so milisecond tu thoi diem khai bao den 1-1-1970
console.log(now.getTime());
console.log(myBirthday.getTime());