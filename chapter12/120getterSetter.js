//get and set methodes are used for if we want to access our hidden properties and want to modify the properties from outside.


/*for that we have to use- Object.defineProperty(object, 'name',{
property: get, set etc
})*/


var Rectangle = function (width, height) {

    var position = {
      x: 45,
      y: 60
    }

    this.width = width
    this.height = height

    var printProperties = function(){
      console.log('My width is: ' + this.width);
      console.log('My height is: ' + this.height);
    }.bind(this)

    this.draw = function(){
      console.log('I am rectangle')
      printProperties()
      console.log('Position: X=' + position.x + 'Position: Y=' + position.y);
    }

    Object.defineProperty(this, 'position' , {  //here we use defineProperty for get access and modify the properties.

      get: function(){   //for access
        return position
      },

      set: function(value){  //for modify
        postion = value
      }
    })
  }

var rect5 = new Rectangle(40, 70)̥
rect5.draw()

rect5.position = {  //here we modify our properties which was private.
  x: 6,
  y: 10
}
console.log(rect5.position); // here we accessed the properties
