// Exercise
// 1. Show all student
// 2. Create a new student
// 3. Save & exit
var fs = require('fs');
var readlineSync = require('readline-sync');
var studentList = [];

function students(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

function readData() {
	var studentString = fs.readFileSync('./data.json', {encoding: 'utf8'});
	var student = JSON.parse(studentString);
	studentList = student;
	return studentList;
}

function showStudents() {
	var student = readData();
	var i = 1;
	for(item of student){
		console.log('Student ' + (i++) + ': ');
		console.log('Name: ' + item.name + ', Age: ' + item.age + ', Gender: ' + item.gender);
	}
}

function createStudents() {
	var name = readlineSync.question('Your name? ');
	var age = readlineSync.question('Your age? ');
	var gender = readlineSync.question('Your gender (male/ female/ other) ');
	var newStudent = new students(name, age, gender);
	studentList.push(newStudent);
}

function saveStudents() {
	var studentString = JSON.stringify(studentList);
	fs.writeFileSync('./data.json', studentString);
	console.log('Save done!');
}


function showMenu() {
	console.log('-------------MENU--------------');
	console.log('1. Show all student');
	console.log('2. Create a new student');
	console.log('3. Save students just created in the list');
	console.log('-------------------------------');
	do {
		var choose = readlineSync.question('Choose: ');
		switch (choose) {
			case '1': 
				showStudents();
				break;
			case '2': 
				createStudents();
				break;
			case '3': 
				saveStudents();
				break;
			default:
				console.log('Please choose again! ');
				showMenu();

		}
		var continues = readlineSync.question('Do you want to continue (y/ n)? ');
	} while(continues === 'y');
	
}

showMenu();

//  https://repl.it/@huelinh/ImmaterialGroundedArchives