// pass by value Vs pass by reference
// call by value Vs call by values
//
// pass by value

var n = 10
function change(n){
  n += 100
  console.log(n);
}

change(n)
console.log(n); //10, here primitive value doesn't change. its called pass by value.

/* if we sent a primitive data as an argument to a function from outside the function can't change the
primitive data. But if we sent object data it can be changeable because of its reference number. */

var obj = {
  a: 10,
  b: 30
}

function changeMe(obj){
  obj.a = obj.a + 100
  obj.b = obj.b + 100
  console.log(obj);
}

changeMe(obj)
console.log(obj); //a:110, b: 130, here objective value has change. This is called pass by reference.
