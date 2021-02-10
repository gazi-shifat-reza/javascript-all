// polymorphism: This is for having multiple characteristic

function extend(parent, children){
  children.prototype = Object.create(parent.prototype)
  children.prototype.constructor = children

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
//We must have to overriding after the extend

Square.prototype.common = function(){
  console.log('I am calling from the Square and I am overridden')// overridden method.
}

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
  // Shape.prototype.common.call(this
  console.log('I am calling from the circle and I am overridden') // overridden method.
}

var sqr = new Square(45, 'green')
var c = new Circle(10, 'red')
var s = new Shape('yellow')

var shapes = [sqr, c, s]
for(var i of shapes){
  i.common()
}

console.log(c instanceof Circle) //true
console.log(c instanceof Shape)  //true
console.log(sqr instanceof Square) //true
console.log(sqr instanceof Circle) //false

//instanceof is used for searching the child's parent.
