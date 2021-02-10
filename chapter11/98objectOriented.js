//Everything which takes multiple properties to Describe is an Object.
//person
//book
//laptop
//bag
//this all Object.

//Any function in object is called method.
//All the noun and adjectives are the properties of a function
//And the verbs are the methods of a function.

/**********************************************************/
//normal procedural

  var height: 10;
  var weight: 20;

  function calculateArea(width, height){
    return weight * height
  }
  function calculateRange(width, height){
    return 2 * (width + height)
  }

var area = calculateArea(width, height)
var range = calculateRange(width, height)

/********************************************************/
//Object oriented

var rect = {
  height: 10,     //This all are properties
  weight: 20,     //properties

  calculateArea: function(){   //methods
    return this.weight * this.height
  },
  calculateRange: function(){  //methods
    return 2 * (this.width + this.height)
  }
}

var area = rect.calculateArea()
var range = rect.calculateRange()

/**/

//****************************************************//

// Class in javascript

//class is factory which used to creat multiple object without duplicate code
//here we define a class Rect

class Rect{
  constructor(width, height){
      this.width = width
      this.height = height
  }
  calculateArea(){
    return this.width * this.height
  },
  calculateRange(){
    return 2 * (this.width + this.height)
  }
}

var rect = new Rect(10,20)     //and here we created multiple object using the class.
var rect = new Rect(50,60)
var rect = new Rect(30,40)


//******************************************************//

/* OOP stands on four main pillar

1.Abstraction: It's main goal is to handle complexity by hiding unnecessary details from the users.

2.Encapsulation: The idea of bundling data and methods that work on the data within one unit.

3.Inheritance: Here you can derive a class to another class for a hierarchy of classes that share a set of attributes and methods.

4.Polymorphism: It describes the concept that objects of different types can be accessed through the same interface.
*/
