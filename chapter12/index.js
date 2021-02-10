// Object literal with method.

// var rect = {
//   width: 100,
//   height: 50,

//   draw: function(){ //this is method
//     console.log('I am rectangle')
//     console.log('My width is: ' + this.width);
//     console.log('My height is: ' + this.height);
//   }
// }

// rect.draw()

// rect.height = 100
// rect.draw()

// If a function is in a object then its called method.


/**********************************************************************/


/* this uses:

1.When 'this' use in a method, that 'this' will refer that particular object
2. If 'this' use in normal function, that 'this' will refer window object
3. it will get the values of his executional context */

// var rect = {
//   width: 100,
//   height: 50,

//   draw: function(){
//     console.log('I am rectangle')
//     this.printProperties()
//   },

//   printProperties: function(){
//     console.log('My width is: ' + this.width);
//     console.log('My height is: ' + this.height);
//   }
// }

// rect.draw()

// var another = {
//   width: 43,
//   height: 88,

//   print: rect.printProperties
//
// }

// another.print() // output= 43, 88. It will get the values of his executional. context.


/***********************************************************************/


// There are 2 pattern.
// 1.factory
// 2.constructor

//Creat Class using factory pattern.
// here creatRect is factory.

// var creatRect = function(width, height){
//   return {
//     width: width,
//     height: height,
//
//     draw: function(){
//       console.log('I am rectangle')
//       this.printProperties()
//       console.log(this);
//     },
//
//     printProperties: function(){
//       console.log('My width is: ' + this.width);
//       console.log('My height is: ' + this.height);
//     }
//   }
// }

// var rect1 = creatRect(20, 45)
// rect1.draw()

// var rect2 = creatRect(45, 54)
// rect2.draw()


/************************************************************************/


// Creat class using constructor pattern.
// variable name should always be uppercase.
// use this. before properties and method name.
// after properties use = instead :
//
// var Rectangle = function (width, height) {

//     this.width = width
//     this.height = height

//     this.draw = function(){
//       console.log('I am rectangle')
//       this.printProperties()
//       console.log(this)  //It will print the Rectangle object.
//     },

//     this.printProperties = function(){
//       console.log('My width is: ' + this.width);
//       console.log('My height is: ' + this.height);
//     }
//   }


// var rect3 = new Rectangle(40, 70) //constructor pattern you have to use new keyword for create another copy of code
// rect3.draw()


/**************************************************************************/


// In javascript function is a special type of object and this is executable.

// call, apply, bind

// function myFunc(c, d){
//   console.log(this);
//   console.log(this.a + this.b + c + d);
// }

// myFunc.call({a: 40, b: 50}, 10, 5) //call method will instantly call the function and first we have to give the object and then the extra arguments

// myFunc.apply({a: 5, b: 8}, [5, 6]) // in apply method we have to give a array for the extra arguments

// var testBind = myFunc.bind({a: 12, b: 10}) // bind is useful for when we want to only bind the function with arguments and maybe call the function later. For that we have to keep the function call inside a variable.

// testBind(7,8)


/****************************************************************************/


// pass by value Vs pass by reference
// call by value Vs call by values

// pass by value

// var n = 10
// function change(n){
//   n += 100
//   console.log(n);
// }

// change(n)
// console.log(n); //10, here primitive value doesn't change. its called pass by value.

// if we sent a primitive data as an argument to a function from outside the function can't change the primitive data. But if we sent object data it can be changeable because of its reference number.


// var obj = {
//   a: 10,
//   b: 30
// }

// function changeMe(obj){
//   obj.a = obj.a + 100
//   obj.b = obj.b + 100
//   console.log(obj);
// }

// changeMe(obj)
// console.log(obj); //a:110, b: 130, here objective value has change. This is called pass by reference.



/*****************************************************************************/


// Hide private properties

// var Rectangle = function (width, height) {

//     var position = {  //we have to use var instead this for hiding
//       x: 45,
//       y: 60
//     }

//     this.width = width
//     this.height = height

//     var printProperties = function(){ //we have to use var instead this for hiding
//       console.log('My width is: ' + this.width);
//       console.log('My height is: ' + this.height);
//     }.bind(this)

//     this.draw = function(){
//       console.log('I am rectangle')
//       printProperties()
//       console.log('Position: X=' + position.x + 'Position: Y=' + position.y);
//     }
//   }


// var rect5 = new Rectangle(40, 70)̥
// rect5.draw()


/*****************************************************************************/


//get and set methods are used for if we want to access our hidden properties and want to modify the properties from outside.


/*for that we have to use- Object.defineProperty(object, 'property name',{
property: get, set etc
})*/


// var Rectangle = function (width, height) {

//     var position = {
//       x: 45,
//       y: 60
//     }

//     this.width = width
//     this.height = height

//     var printProperties = function(){
//       console.log('My width is: ' + this.width);
//       console.log('My height is: ' + this.height);
//     }.bind(this)

//     this.draw = function(){
//       console.log('I am rectangle')
//       printProperties()
//       console.log('Position: X=' + position.x + 'Position: Y=' + position.y);
//     }

//     Object.defineProperty(this, 'position' , {  //here we use defineProperty for get access and modify the properties.

//       get: function(){   //for access
//         return position
//       },

//       set: function(value){  //for modify
//         position = value
//       }
//     })
//   }

// var rect5 = new Rectangle(40, 70)̥
// rect5.draw()

// rect5.position = {  //here we modify our properties which was private.
//   x: 6,
//   y: 10
// }
// console.log(rect5.position); // here we accessed the properties
