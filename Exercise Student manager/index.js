var fs = require('fs');
var readLineSync = require('readline-sync');
studentList = [];

function readData() {
	var content = fs.readFileSync('./data.json', {encoding: 'utf8'});
	studentList = JSON.parse(content);
}

function showStudent() {
	for( var i of studentList) {
		console.log('Name: ' + i.name + ', Age: ' + i.age);
	}
}

function createStudent() {
	var name = readLineSync.question('Your name: ');
	var age = readLineSync.question('Your age: ');
	var student = {
		name: name,
		age: parseInt(age)
	}
	studentList.push(student);
}

function saveandExit() {
	var content = JSON.stringify(studentList);
	fs.writeFileSync('./data.json', content);
	console.log('Save done!');
}

function showMenu() {
	console.log('1. Show student list');
	console.log('2. Create a new student');
	console.log('3. Save & exit');
	var choose = readLineSync.question('> ');
	switch(choose) {
		case '1':
			showStudent();
			showMenu();
			break;
		case '2':
			createStudent();
			showMenu();
			break;
		case '3':
			saveandExit();
			break;
		default:
			console.log('Choose again!');
			showMenu();
			break;
	}
}

function main() {
	readData();
	showMenu();
}
main();