// Function as parameter (callback)
// Dùng function như 1 tham số
var coffeeMachine = {
  makeCoffee: function(onFinish){
    console.log('Making coffee');
    onFinish();
  }
};
//coffeeMachine.makeCoffee();
var beep = function(){
  console.log('Tit tit');
}
//beep();

coffeeMachine.makeCoffee(beep);