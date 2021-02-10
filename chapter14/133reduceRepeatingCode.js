//Reduce repeating code by creating Extend function.

function extend(parent, children){
  children.prototype = Object.create(parent.prototype)
  children.prototype.constructor = children

  // Here we create function for reducing the same kind of code.
}

function Shape(color){
  this.color = color
}

Shape.prototype.common = function() {
  console.log('I am common method')
}

function Square(width, color){
  Shape.call(this, color)
  this.width = width
}

extend(Shape, Square)
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square
//We had to wrote same kind of code every time for every shape so we reduce it

Square.prototype.draw = function(){
  console.log('Drawing')
}

function Circle(radius, color){
  Shape.call(this, color)
  this.radius = radius
}

extend(Shape, Circle)
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square
// We had to wrote same kind of code every time for every shape so we reduce it

var sqr = new Square(45, 'green')
var circle = new Circle(10, 'red')
