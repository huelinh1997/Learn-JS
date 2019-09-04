// database design
var classes = [
	{
		id: 0,
		name: '1A',
		teacher: 0,
		// students: [
		// 	0,
		// 	1,
		// 	2,
		// 	3
		// ]
	},
	{
		id: 1,
		name: '2A',
		teacher: 1
	},
	{
		id: 2,
		name: '3A',
		teacher: 2
	},
	{
		id: 3,
		name: '4A',
		teacher: 3
	},
	{
		id: 4,
		name: '5A',
		teacher: 4
	}
]

var teachers = [
	{
		id: 0,
		name: 'Tu',
		age: 40
	},
	{
		id: 1,
		name: 'Minh',
		age: 35
	},
	{
		id: 2,
		name: 'Hoa',
		age: 27
	},
	{
		id: 3,
		name: 'Huong',
		age: 29
	},
	{	id: 4,
		name: 'Trang',
		age: 32
	}

];

var students = [
	{ id: 0, name: 'Anh', height: 120, class: 0},
	{ id: 1, name: 'Bao', height: 125, class: 0},
	{ id: 2, name: 'Cuong', height: 130, class: 0},
	{ id: 3, name: 'Dieu', height: 127, class: 0}
];

// var class1A = classes.find(function(x) {
// 	return x.name === '1A';
// })
// console.log(class1A.students.length);
function getStudentInClass(classname) {
	var classObject = classes.find(function(x) {
		return x.name === classname;
	});
	var studentInClass = students.filter(function(student) {
		return student.class === classObject.id;
	});
	return studentInClass;
}
var studentInClass = getStudentInClass('1A');
console.log(studentInClass);