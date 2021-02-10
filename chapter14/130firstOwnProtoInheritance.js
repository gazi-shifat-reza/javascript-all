//We need: sqr-> Square-> Shape-> Object


function Shape(){  //Here we create the function

}

Shape.prototype = {  //we keep common method in shape function
  common: function() {
    console.log('This is common method')
  }
}

function Square(width){
  this.width = width
}

function Circle(){

}

Circle.prototype = Object.create(Shape.prototype)  //Here we we create prototypical inheritance for Circle with common method

Square.prototype = Object.create(Shape.prototype)  //Here we we create prototypical inheritance for square with common method

// var shape = new Shape()
var sqr1 = new Square(45)
var circle1 = new Circle()

sqr1.common()  //Here we can use common method easily
circle1.common()
