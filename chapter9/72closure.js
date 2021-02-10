var b = 10

function a(){
  var x = 5

  return function(){
    console.log(x);
  }
}

var abc = a()
console.dir(abc);

/* If a data comes from one scope to another scope that time a closure creates. Above code a() function
has a scope and function() has different scope. and data comes from a() to function(), so there is a
closure creates */
