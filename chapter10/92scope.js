// We can create a context by only using function. and every function has a scope.

var x = 55

function test(){  //here we created a scope by test fuction
  var x = 45  //It will take only it's variable within his scope
  console.log(x)

  function nested(){ //here we create another scope
    var y = 60
    console.log(x) //for this output will be 55 because global scope
  }
}
console.log(y); // will not have any output because for scope
test() //  output = 45

/*
->In javascript we can make block only by function declaration. Others like loop, if, else can not make any block. By only function we can make scope.

-> Global variable is accessible from any parent and child function.
-> Parent function can access Global variable but can't access it's child variable.
-> Child function can access both his parent and Global variable.
*/
