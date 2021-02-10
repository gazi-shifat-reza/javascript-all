/*There are two part of any object or constructor function
1. Instance member : declaration of construction function
2. Prototype member : declaration of prototype function.

-> we can get access from instance member to prototype member and also prototype member to instance member.

*/


function Square(width){
  this.width = width
}

Square.prototype = {
  draw : function(){
    console.log(draw);
    },
  toString: function(){
    return 'My width is ' + this.width
  }
}

var sqr1 = new Square(10)
var sqr2 = new Square(15)


//we can get access from instance member to prototype member and also prototype member to instance member.
