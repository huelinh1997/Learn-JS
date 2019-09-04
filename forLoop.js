var employees = [
	{name: 'Linh', age: 22},
	{name: 'Suong', age: 21},
	{name: 'Trang', age: 23}
];

for(i = 0; i < 3 ; i++){
	console.log(employees[i].name, employees[i].age);
}


// For...of
for(employee of employees){
  console.log(employee.name, employee.age);
}


// For...in
var myDog = {
  name: 'Đần',
  age: 1,
  weight: 5
} 
//myDog.name or myDog['name'];
for(var key in myDog){
  console.log(key, myDog[key]);
}

// For in: in ra các chỉ số của Array hoặc key của Object
// For of: in ra các giá trị của Array hoặc value của Object
var arr = [3, 5, 7, 9, 11];

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "3", "4"
}
console.log('=============');
for (var i of arr) {
   console.log(i); // logs 3, 5, 7, 9, 11
}
