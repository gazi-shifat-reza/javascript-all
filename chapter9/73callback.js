//Below code a functon called as a argument and it's work.

function sample(a,b){
  var c = a + b
  var d = a - b
  var result = sum(c, d) //Here we call another function which is declear below
  return result
}

function sum(a,b){ //Here we declare the function.
  return a + b
}

console.log(sample(30,10));


//****************************************************//

// Below code we use a callback function. we use sum function as a callback function, Where the sum function has already decleared.

function sample(a, b, cb){ //we have to declare extra one parameter as a callback function. so we declare cb as a callback function.
  var c = a + b
  var d = a - b
  var result = cb(c, d) //Here we call the callback function which is declare below
  return result
}

function sum(a,b){ //Here we declare the function.
  return a + b
}

console.log(sample(30,10, sum));


/******************************************************************************/

function sample(a,b,cb){
  var c = a + b
  var d = a - b
  var result = cb(c, d)
  return result
}

var result2 = sample(30, 10, function(c, d){ //Here we create an anonymous function for subtraction
  return c - d
})
console.log(result2);

/******************************************************************************/

var result3 = sample(30, 10, function(c, d){ //Here we create an anonymous function for multiplication.
  return c * d
})
console.log(result3);

//By calling main function and create an anonymous function we can do any operation.
