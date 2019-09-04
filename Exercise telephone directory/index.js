/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readLineSync = require('readline-sync');
var fs = require('fs');
var contactList = [];

function readData() {
	var contactFromData = fs.readFileSync('./data.json', {encoding: 'utf8'});
	if(contactFromData != '') {
		contactList = JSON.parse(contactFromData);
	}
}

function enterData() {
	var name = readLineSync.question('Your name: ');
	var phoneNumber = readLineSync.question('Your phone number: ');
	var contact = {
		name: name,
		phoneNumber: phoneNumber
	}
	contactList.push(contact);
	var content = JSON.stringify(contactList);
	fs.writeFileSync('./data.json', content);
}

function showContact() {
	 if(contactList.length === 0) {
	 	console.log('No data yet!');
	 }
	else {
		var i = 0;
		for(var item of contactList) {
			console.log('Contact '+ (++i) + ': ' + 'Name: ' + item.name + ', Phone number: ' + item.phoneNumber);
		}
	}
}

function editData() {
	showContact();
	var editContact = parseInt(readLineSync.question('Which contact do you want to edit? (1/2/3 / ...) '));
	var nameEdit = readLineSync.question('Name to edit: ');
	var phoneEdit = readLineSync.question('Phone to edit: ');
	var count = 0;
	for(item of contactList) {
		++count;
		if(count === editContact) {
			item.name = nameEdit;
			item.phoneNumber = phoneEdit;
		}
	}
	var content = JSON.stringify(contactList);
	fs.writeFileSync('./data.json', content);
	console.log('complete editing!');

}

function deleteData() {
	showContact();
	var deleteContact = parseInt(readLineSync.question('Which contact do you want to delete? (1/2/3 / ...) '));
	var count = 0;
	for(item of contactList) {
		++count;
		if(count === deleteContact) {
			contactList.splice(count - 1, 1);
		}
	}
	var content = JSON.stringify(contactList);
	fs.writeFileSync('./data.json', content);
	console.log('Delete completed!');
}

function change_alias(alias) {
    var str = alias;
   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.trim(); 
    return str;
}

function findData() {
	var find = readLineSync.question('Enter the name you want to search: ');
	var findContact = change_alias(find).toLowerCase();
	for(item of contactList) {
		var nameInDirectory = change_alias(item.name).toLowerCase();
		if(nameInDirectory === findContact) {
			console.log('Name: ' + item.name + ', Phone: ' + item.phoneNumber);
		}
	}
}

function showMenu() {
	console.log('1. Show contact');
	console.log('2. Enter contact data');
	console.log('3. Edit contact data');
	console.log('4. Delete contact data');
	console.log('5. Find contact data');
	console.log('6. Exit');
	var choose = readLineSync.question('> ');
	switch(choose) {
		case '1':
			showContact();
			showMenu();
			break;
		case '2':
			enterData();
			showMenu();
			break;
		case '3':
			editData();
			//showContact();
			showMenu();
			break;
		case '4':
			deleteData();
			showMenu();
			break;
		case '5':
			findData();
			showMenu();
			break;
		case '6':
			break;
		default:
			contact.log('Choose again!');
			showMenu();
			break;
	}
}

function main() {
	readData()
	showMenu();
}

main();