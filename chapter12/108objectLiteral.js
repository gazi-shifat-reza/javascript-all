// Object literal with method.

var rect = {
  width: 100,
  height: 50,

  draw: function(){ //this is method
    console.log('I am rectangle')
    console.log('My width is: ' + this.width);
    console.log('My height is: ' + this.height);
  }
}

rect.draw()

rect.height = 100
rect.draw()

// If a function is in a object then its called methode.
