// Creat Class using factory pattern.
//factory is a function which will return the object.

var creatRect = function(width, height){  //have to take a variable for the function.

  return { //return the object.
    width: width,
    height: height,

    draw: function(){
      console.log('I am rectangle')
      this.printProperties()
      console.log(this);
    },

    printProperties: function(){
      console.log('My width is: ' + this.width);
      console.log('My height is: ' + this.height);
    }
  }
}

var rect1 = creatRect(20, 45)  //this way we can create multiple function without being copied.
rect1.draw()

var rect2 = creatRect(45, 54)
rect1.draw()
