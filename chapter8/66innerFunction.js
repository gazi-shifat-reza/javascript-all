/*Inner function is nothing but a function inside another function

function functionName(a,b){
function functionName(){
  statements
}
}

*/

//In innerFunction you have to call the second function inside the function declaration.

function something(greet, name){
  function getFirstName(){
    if(name){
      return name.split(' ')[0]
    }else{
      return ' '
    }
  }
  var message = greet + ' ' + getFirstName()
  console.log(message);
}

something('Good morning', 'shifat')
