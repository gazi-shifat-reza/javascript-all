/*
Inheritance is a function where we keep our most common code like draw, shape  for easy use and it reduces override the code.
1. Classical inheritance:

2. Prototype inheritance: It is nothing but a parent class.


-> In JS every object has a parent class, that parent class is called that object's Prototype.

-> In JS every object will have object base (parent object) but Object() constructor won't have the object base.

*/



//multi level inheritance:

// function Person(name){
//   this.name = name
// }

// var p1 = new Person('Shifat')
// console.log(p1);
//
// console.log(Object.getPrototypeOf(p1));  //to get the prototype of p1.

//Here p1 object's base is Person and Person object's base is Object(), This is called multi-level Inheritance.



/******************************************************************************/



// var person = {
//   name: 'Gazi Shifat Reza'
// }

//Property Descriptor is an object.
//To see property descriptor:
// Object.getOwnPropertyDescriptor(object, property)

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name') //(object name, properties name) which object of which properties wanna see.
//   console.log(descriptor)


// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)


// Object.defineProperty(person, 'name',{
//   enumerable: false,
//   writeable: false,
//   configurable: false,
//   value: 'GS Reza'
// })


/******************************************************************************/


// we can add some common code to the base object so that it can share that all the new copy

// function Person(name){
//   this.name = name
// }

// Person.prototype.PI = 3.1416 //here we add pi

// var p1 = new Person('Rony')  //now that pi is added to all other new variable.
// var p2 = new Person('Shifat')

// console.log(p1)
// console.log(p2)


/******************************************************************************/


/*There are two part of any object or constructor function
1. Instance member : declaration of construction function
2. Prototype member : declaration of prototype function.

-> we can get access from instance member to prototype member and vice versa.

*/


function Square (width){
  this.width = width
}

Square.prototype = { //Here we add extra prototype. now we can use this prototype separately.
  draw : function(){
    console.log('Draw')
  },
  toString: function(){
    return 'My width is ' + this.width
  }
}

var sqr1 = new Square(10)
// console.log(sqr1.draw);  //Here we use the draw function separately
var sqr2 = new Square(15)
// console.log(sqr2.toString) //Here we use the toString function separately
