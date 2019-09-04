Primitive types:
- Number
- String
- Boolean
Special types:
- Underfined
- null
Reference types:
- Array
- Object

// Number 
var a1 = -100;
var a2 = 0.5;

// String
var str1 = 'Hello';
var str2 = "Hello";
console.log(Str2);
var str3 = 'Hello I\'m Linh' // escape a character

// Boolean (true, false)
var isHidden = true;
console.log(isHidden);
var isMale = true;

// Undefined
var a;
console.log(a); // lúc này a chưa được gán giá trị nên khi consolog sẽ in ra giá trị là undefined

// Null
var a = null;
console.log(a);

// Object
var myDog = {
  name: 'Bo',
  weight: 5.5,
  isAlive: true
};
console.log(myDog.name);
console.log(myDog.weight);
console.log(myDog['isAlive']);

var myBestFriend = {
  nickName: 'Lon',
  weight: 50,
  gender: 'Female'
};

// Array
dog1 = {
	type: 'Corgi'
}
dog2 = {
	type: 'Phu Quoc'
}
dog3 = {
	name: 'Dan',
	type: 'Husky'
}
var bunchOfDogs = [dog1, dog2, dog3];
console.log(bunchOfDogs);
console.log(bunchOfDogs[2]);
console.log(bunchOfDogs[2].name);

dog4 = {
  type:'Shiba'
}
bunchOfDog[0] = dog4;
console.log(bunchOfDog);
