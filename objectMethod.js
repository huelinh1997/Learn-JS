var myDog = {
  name: 'Đần',
  weight: 5,
  age:1,
  bark: function(){ // Anonymous function: function ko có tên  
    console.log('Gâu gâu, my name is ', this.name);
  },
  eat: function(bone){
    this.weight=this.weight+bone.weight;

    return this;
  }
}
var bone = {
  weight: 0.5
}
console.log('Before eating: ',myDog.weight);
myDog.eat(bone);
console.log('After eating: ', myDog.weight);