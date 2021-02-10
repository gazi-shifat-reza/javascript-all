//new class syntax for ES6

class Rectangle {
  constructor(width, height){
    this.width = width
    this.height = height

    this.another = function(){  // we can define a method inside property also
  }

  draw(){
    console.log('Drawing...')  //method
  }
}

let rect1 = new Rectangle(45, 50)
console.log(rect1)
console.log(rect1.draw())
console.log(typeof Rectangle) //function
