/* What is object:
Object is basically a way to keep some bunch of data where each and every data
will have an name to represent instead of index. example:
student 1:
math: 80,
Physics: 85,
chemistry: 75,
Higher math: 90
*/

//******************************************//


// Declaration of object by literal way:

var point = {
  x: 10,
  y: 20
}
point.y = 30  //It will directly replace the data
point.z = 40 // It will add one more properties to the variable.
console.log(point);

//Way two by Object() constructor method:
var obj = Object()
obj.a = 40
obj.b = 50
console.log(obj);


//***********************************//


/* To get the access of an object there are two notation
1. Dot notation
2. Array notation
*/

var obj = {
  x: 10,
  y: 20,
  z: 30
}
console.log(obj.x, obj.y, obj.z)  //dot notation
console.log(obj.x + obj.y + obj.z);

console.log(obj['x'], obj['y'], obj['z']);  //array notation
console.log(obj['x'] + obj['y'])


//*******************************************//


obj.x = 60  //update a properties by dot notation
console.log(obj);
obj.k = 100  //Add new properties by dot notation
console.log(obj);

obj['j'] = 220;  //Add new properties by array notation
console.log(obj);

var prop = 'i' // add / update properties through variable
obj[prop] = 134;
console.log(obj);


//************************************************//


//delete a properties from an object
delete obj.x
console.log(obj);
