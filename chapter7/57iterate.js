//iteration using for in loop for object.
var obj = {
  x: 40,
  y: 30,
  z: 10
}

// console.log('x' in obj);
// console.log('z' in obj);  //We can easily find the properties whether they are exist in or not by in method

for( var i in obj){  //this is for in loop for object.
  console.log(i);
  console.log('i: ' + obj[i]); // if we wanna get the properties values by any variable we have to use 'array notation'
}
