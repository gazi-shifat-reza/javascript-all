//Abstraction is basically a process where we can hide our some information or some properties from the user for user can not change or harm our properties.


// Hide private properties
//we have to keep all the properties in a variable which all properties we want to hide.


var Rectangle = function (width, height) {

    var position = {  //we have to use var instead this for hiding
      x: 45,
      y: 60
    }

    this.width = width
    this.height = height

    var printProperties = function(){ //we have to use var instead this for hiding
      console.log('My width is: ' + this.width);
      console.log('My height is: ' + this.height);
    }.bind(this)

    this.draw = function(){
      console.log('I am rectangle')
      printProperties()
      console.log('Position: X=' + position.x + 'Position: Y=' + position.y);
    }
  }


var rect5 = new Rectangle(40, 70)̥
rect5.draw()

//now position and printProperties are hidden from the user.
