/*
Inheritance is a function where we keep our most common code like draw, shape  for easy use and it reduces override the code.
1. Classical inheritance:

2. Prototype inheritance: It is nothing but a parent class.


-> In JS every object has a parent class, that parent class is called that object's Prototype.

-> In JS every object will have object base (parent object) but Object() constructor won't have the object base.


*/




//multi level inheritance:

function Person(name){
  this.name = name
}

var p1 = new Person('Shifat')
console.log(p1);

console.log(Object.getPrototypeOf(p1));  //to get the prototype of p1.

//Here p1 object's base is Person and Person object's base is Object(), This is called multi-level Inheritance.
