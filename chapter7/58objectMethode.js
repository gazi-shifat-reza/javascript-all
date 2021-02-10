var obj = {
  x: 39,
  y: 33,
  z: 38
}

// console.log(Object.keys(obj)); //it will return all the properties of the object

// console.log(Object.values(obj));  //it will return only the values of the properties in an array

// console.log(Object.entries(obj)); //it will returns all the properties with his values in an 2D array


var obj2 = Object.assign({}, obj)  /* Object.from() function make an another Object from the Object inside the parentheses. And The array will be the
different Object and it wont have any connection with parent object.*/
// obj2.x = 100

console.log(obj, obj2);
