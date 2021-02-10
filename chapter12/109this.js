/* this uses:

1.When 'this' use in a method, that 'this' will refer that particular object
2. If 'this' use in normal function, that 'this' will refer window object
3. it will get the values of his executional context */

var rect = {
  width: 100,
  height: 50,

  draw: function(){
    console.log('I am rectangle')
    this.printProperties()
  },

  printProperties: function(){
    console.log('My width is: ' + this.width);
    console.log('My height is: ' + this.height);
  }
}

rect.draw()

var another = {
  width: 43,
  height: 88,

  print: rect.printProperties

}

another.print() // output= 43, 88. It will get the values of his executional. context.
