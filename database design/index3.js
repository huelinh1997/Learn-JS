/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var library = [
  {id: 0, bookshelvesName: 'astronomy'},
  {id: 1, bookshelvesName: 'Fairy tale'},
  {id: 2, bookshelvesName: 'literature'},
  {id: 3, bookshelvesName: 'math  books'},
  {id: 4, bookshelvesName: 'children\'s stories'}
];

var books = [
  {id:0, booksName: 'book1', available:10, idBookshelves: 0},
  {id:1, booksName: 'book2', available:20, idBookshelves: 1},
  {id:2, booksName: 'book3', available:30, idBookshelves: 1},
  {id:3, booksName: 'book4', available:15, idBookshelves: 2},
  {id:4, booksName: 'book5', available:35, idBookshelves: 3}
];
var users = [
  {
    id: 0,
    nameUser: 'people1'
  },
  {
    id: 1,
    nameUser: 'people2'
  }
];
function formatDate(date) {
  var moment = require('moment');
  var now = moment(date);
  return now.format('YYYY/MM/DD');
}

// function overdue(date) {
//   var moment = require('moment');
//   var now = moment(date);
//   return now.fromNow();
// }
function overdue(date) {
  var now = new Date();
  var count = now.getTime() - date.getTime();
  var dayOverdue = Math.floor(count / (24 * 60 * 60 * 1000));
  if(dayOverdue < 0) return (dayOverdue*(-1)+ ' days left');
  else return ('Over ' + dayOverdue + ' days overdue');
}

function getTitleBook(id) {
  var booksToFind = books.find(function(x) {
    return x.id === id;
  }); 
  return booksToFind.booksName;
}

var booksBorrowed = [
  {peopleID: 0, booksID: 0, amount: 2, loanDate:new Date(), payDate: new Date('2019-06-30')},
  {peopleID: 0, booksID: 1, amount: 1, loanDate: new Date('2019-03-19'), payDate: new Date('2019-06-30')},
  {peopleID: 1, booksID: 1, amount: 1, loanDate: new Date('2019-03-14'), payDate: new Date('2019-06-30')},
  {peopleID: 1, booksID: 3, amount: 1, loanDate: new Date('2019-03-14'), payDate: new Date('2019-06-30')}

];

function bookBorrow(namePeopleBorrows) {
  var peopleBorrow = users.find(function(x) {
    return x.nameUser === namePeopleBorrows;
  });

  var bookBorrowInf = booksBorrowed.filter(function(book) {
    return book.peopleID === peopleBorrow.id;
  });
  return bookBorrowInf;
}

function bookBorrowInformation(namePeopleBorrows) {
  var bookBorrowInf = bookBorrow(namePeopleBorrows);
  const {table} = require('table');
  let data,
    output;
  data = [
    ['Books ID', 'Books Name' , 'Amount', 'Loan Date', 'Pay Date']
  ];
  for(i of bookBorrowInf){
    var a = [i.booksID, getTitleBook(i.booksID) , i.amount, formatDate(i.loanDate), formatDate(i.payDate)];
    data.push(a);
  }
  output = table(data);
  
  console.log(output);
}

function numberOfdayOverdue(namePeopleBorrows) {
  var bookBorrowInf = bookBorrow(namePeopleBorrows);
  const {table} = require('table');
  let data,
    output;
  data = [
    ['Books ID', 'Books Name' , 'Days Overdue']
  ];
  for(i of bookBorrowInf){
    var a = [i.booksID, getTitleBook(i.booksID) , overdue(i.payDate)];
    data.push(a);
  }
  output = table(data);
  
  console.log(output);
}
// bookBorrowInformation('people1');
numberOfdayOverdue('people2');