//5. We can pass function as an arguments
//6. We can return function from another function.

function add(a, b){
  return a+b
}

function manipulate(a, b, func){
  var c = a + b
  var d = a - b

  function multiply(){
    var m = func(a,b)
    return c*d*m
  }

  return multiply
}

// console.log(typeof multiply);
var multiply = manipulate(7, 5, add)
console.log(multiply());
