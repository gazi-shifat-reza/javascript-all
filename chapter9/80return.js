// A function can be used as a return.

function greet(msg){
  function greeting(name){
    return msg + ', ' + name + '!'
  }
  return greeting
}

var gm = greet('Good morning')
var gn = greet('Good night')
var salam = greet ('Assalamulaikum')
var msg1 = salam('Mahbub')
var msg = salam('Shifat')
console.log(msg1);
console.log(salam('shifat reza'));


//**************************************//

function pow(p){

  return function(b){
    var result = 1
    for(var i= 0; i<=p; i++){
    result *= b
    }
      return result
  }
}

var power2 = pow(2)
var power5 = pow(5)
var power8 = pow(8)
console.log(power2(5));
console.log(power5(5));
console.log(power8(5));
