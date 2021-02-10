//Creat class using constructor pattern.

//variable name should always be start with uppercase.
// use this. before properties and method name.
// after properties use '=' instead ':'

// always use constructor pattern for make copy

var Rectangle = function (width, height) {

    this.width = width
    this.height = height

    this.draw = function(){
      console.log('I am rectangle')
      this.printProperties()
      console.log(this);
    }

    this.printProperties = function(){
      console.log('My width is: ' + this.width);
      console.log('My height is: ' + this.height);
    }
  }


var rect3 = new Rectangle(40, 70) //constructor pattern you have to use 'new' keyword for create another copy of code
rect3.draw()
