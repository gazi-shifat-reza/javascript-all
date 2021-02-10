/* We can declare a function as a expression like we can keep a function in a variable. This is called anonymous function*/

var addition = function (a, b){ //here we keep our function in another variable named addition and when we don't give the function name that function is called anonymous function.
  return a+b
}
console.log(addition(5,6)); // and finally we print the function's variable.



setTimeout(function() { //Here we use anonymous function.
  console.log('I will come')
}, 5000)//this is millisecond; so it will execute after 5 sec.)


var another = addition // we can also make another folder and keep our anonymous function.
console.log(another(8,9));
