//method overriding: Sometimes we need to change our base or parent methode for some circumstance. This changing called method overriding.

function extend(parent, children){
  children.prototype = Object.create(parent.prototype)
  children.prototype.constructor = children

  // Here we create function for reducing the same kind of code.
}

function Shape(color){
  this.color = color
}

Shape.prototype.common = function() {  //parent method
  console.log('I am common method')
}

function Square(width, color){
  Shape.call(this, color)
  this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function(){
  console.log('Drawing')
}

function Circle(radius, color){
  Shape.call(this, color)
  this.radius = radius
}

extend(Shape, Circle)
//We must have to overriding after the extend

Circle.prototype.common = function(){
  Shape.prototype.common.call(this)  //This is the way to call parent method.
  console.log('I am calling from the circle and I am overridden')// overridden method.
}

// var sqr = new Square(45, 'green')
var circle = new Circle(10, 'red')
