function Shape(color){  //here we gave a parameter color
  this.color = color
}

Shape.prototype.common = function() {
  console.log('I am common method')
}

function Square(width, color){  //We can call the color parameter
  Shape.call(this, color)  //with .call function(object, parameter)
  this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function(){
  console.log('Drawing')
}
var sqr = new Square(45, 'green')
