//Inheritance in ES6: Have to use 'extends' keyword and then use super() if parents' has constructor and want to Inheritance.

class Shape {
  constructor(color){
    this.color = color
  }

  draw(){  //It would override 21st line.
    console.log('Drawing...')
  }
}


class Rectangle extends Shape {  //We have to use 'extends' key for Inheritance
  constructor(color, width, height){
    super()  //have to call super() if we want to Inheritance from parent.
    this.width = width
    this.height = height
  }

  draw(){
    console.log('Drawing a Rectangle...')  //method override.. simple add method into child class it will override to parent' class.
  }

  calculate(){
    return this.width * this.height
  }
}

let r1 = new Rectangle('red', 4, 5)
console.log(r1)
r1.draw()
