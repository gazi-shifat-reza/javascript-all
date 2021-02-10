
/*There are two part of any object or constructor function
1. Instance member : declaration of construction function
2. Prototype member : declaration of prototype function.

-> we can get access from instance member to prototype member and vice versa.

*/


function Square (width){
  this.width = width
}

Square.prototype = { //Here we add extra prototype. now we can use this prototype separately.
  draw : function(){
    console.log('Draw')
  },
  toString: function(){
    return 'My width is ' + this.width
  }
}

var sqr1 = new Square(10)
console.log(sqr1.draw);  //Here we use the draw function separately
var sqr2 = new Square(15)
console.log(sqr2.toString) //Here we use the toString function separately
