// In javascript function is a special type of object and this is executable.

// call, apply, bind

function myFunc(c, d){
  console.log(this);
  console.log(this.a + this.b + c + d);  //here no function has been created
}

myFunc.call({a: 40, b: 50}, 10, 5) //call method will instantly call the function and first we have to give the object and then the extra arguments

myFunc.apply({a: 5, b: 8}, [5, 6]) // in apply method we have to give a array for the extra arguments

var testBind = myFunc.bind({a: 12, b: 10}) // bind is useful for when we want to only bind the function with arguments and will call the function later. For that we have to keep the function call inside another variable.

testBind(7,8)
