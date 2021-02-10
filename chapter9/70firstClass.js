//First class function
 function add(a,b) {
   return a+b
 }

 //1.Function can be Stored in a variable
  var sum = add
  console.log(sum(5,6));
  console.log(typeof sum);

//2.Function can be stored in an array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](6,7));

//3. A function can be stored in an object.
var obj = {
  sum: add
}

console.log(obj);
console.log(obj.sum(7,9));

//4. We can create function as need
setTimeout( function(){
  console.log('I have created a website');
}, 500)
//Here we created a function inside another function


//So, javascript function first class function.
