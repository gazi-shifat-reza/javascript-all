  // //We need: sqr-> Square-> Shape-> Object

// function Shape(){  //Here we create the function
//
// }

// Shape.prototype.common = function() {  //we keep common methode in shape function
//     console.log('This is common methode')
//   }

// function Square(width){
//   this.width = width
// }

// Square.prototype.draw = function(
//   console.log('drawing')
// )

// function Circle(){

// }


// Square.prototype = Object.create(Shape.prototype)  //Here we we create prototypical inheritance for square with common methode
// Square.prototype.constructor = Square //always do this after prototypical inheritance.

// Circle.prototype = Object.create(Shape.prototype)  //Here we we create prototypical inheritance for Circle with common metthode
// Circle.prototype.constructor = Circle
// var shape = new Shape()
// var sqr1 = new Square(45)
// var circle1 = new Circle()

// sqr1.common()  //Here we can use common methode easily
// circle1.common()


/******************************************************************************/

// Calling super

// function Shape(color){
//   this.color = color
// }

// Shape.prototype.common = function() {
//   console.log('I am common method')
// }

// function Square(width, color){
//   Shape.call(this, color)
//   this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

// Square.prototype.draw = function(){
//   console.log('Drawing')
// }
// var sqr = new Square(45, 'green')


/******************************************************************************/

// //Reduce repeating code by creating Extend function.

// function extend(parent, children){
//   children.prototype = Object.create(parent.prototype)
//   children.prototype.constructor = children

//   // Here we create function for reuding the same kind of code.
// }

// function Shape(color){
//   this.color = color
// }

// Shape.prototype.common = function() {
//   console.log('I am common method')
// }

// function Square(width, color){
//   Shape.call(this, color)
//   this.width = width
// }

// extend(Shape, Square)
// // Square.prototype = Object.create(Shape.prototype)
// // Square.prototype.constructor = Square
// //We had to wrote same kind of code every time for every shape so we reduce it

// Square.prototype.draw = function(){
//   console.log('Drawing')
// }

// function Circle(radius, color){
//   Shape.call(this, color)
//   this.radius = radius
// }

// extend(Shape, Circle)
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square
// We had to wrote same kind of code every time for every shape so we reduce it

// var sqr = new Square(45, 'green')
// var cercle = new Circle(10, 'red')


/******************************************************************************/

// //method overriding: Sometimes we need to change our base or parent methode for some circumstance. This changing called method overriding.

// function extend(parent, children){
//   children.prototype = Object.create(parent.prototype)
//   children.prototype.constructor = children
/
//   // Here we create function for reuding the same kind of code.
// }
//
// function Shape(color){
//   this.color = color
// }
//
// Shape.prototype.common = function() {  //parent method
//   console.log('I am common method')
// }
//
// function Square(width, color){
//   Shape.call(this, color)
//   this.width = width
// }
//
// extend(Shape, Square)
//
// Square.prototype.draw = function(){
//   console.log('Drawing')
// }
//
// function Circle(radius, color){
//   Shape.call(this, color)
//   this.radius = radius
// }
//
// extend(Shape, Circle)
// //We must have to overriding after the extend
//
// Circle.prototype.common = function(){
//   Shape.prototype.common.call(this)  //This is the way to call parent method.
//   console.log('I am calling from the cicle and I am overridden')// overridden method.
// }
//
// // var sqr = new Square(45, 'green')
// var cercle = new Circle(10, 'red')


/******************************************************************************/
// // polymorphism: This is for having multiple chracterestic
//
// function extend(parent, children){
//   children.prototype = Object.create(parent.prototype)
//   children.prototype.constructor = children
//
// }
//
// function Shape(color){
//   this.color = color
// }
//
// Shape.prototype.common = function() {  //parent method
//   console.log('I am common method')
// }
//
// function Square(width, color){
//   Shape.call(this, color)
//   this.width = width
// }
//
// extend(Shape, Square)
//
// Square.prototype.common = function(){
//   console.log('I am calling from the Square and I am overridden')// overridden method.
// }
//
// Square.prototype.draw = function(){
//   console.log('Drawing')
// }
//
// function Circle(radius, color){
//   Shape.call(this, color)
//   this.radius = radius
// }
//
// extend(Shape, Circle)
// //We must have to overriding after the extend
//
// Circle.prototype.common = function(){
//   // Shape.prototype.common.call(this
//   console.log('I am calling from the cicle and I am overridden') // overridden method.
// }
//
// var sqr = new Square(45, 'green')
// var c = new Circle(10, 'red')
// var s = new Shape('yellow')
//
// var shapes = [sqr, c, s]
// for(var i of shapes){
//   i.common()
// }
//
// console.log(c instanceof Circle) //true
// console.log(c instanceof Shape)  //true
// console.log(sqr instanceof Square) //true
// console.log(sqr instanceof Circle) //false
//
// //instanceof is used for searching the child's parent.


/******************************************************************************/

//Mixing: inheritance + compositions
//Object.assign(base, source)->base will be an object which will concate with other sources.

// function mixing(target, ...sources){
//   Object.assign(target, ...sources)
// }
//
//
// var canWalk = {
//   walk: function() {
//     console.log('Walking...')
//   }
// }
//
// var canEat = {
//   eat: function() {
//     console.log('Eating...')
//   }
// }
//
// var canSwim = {
//   swim: function(){
//     console.log('Swimming...')
//   }
// }
// // var person = Object.assign({}, canWalk, canEat)  //literal way
// // person.name = 'Gazi Shifat'
// // console.log(person)
//
// function Person(name){  //Construction way
//   this.name = name
// }
// // Object.assign(Person.prototype, canWalk, canEat)
//
// mixing(Person.prototype, canWalk, canEat)
//
// var p1 = new Person('Gazi shifat')
// console.log(p1)
//
// function goldFish(name){
//   this.name = name
// }
//
// mixing(goldFish.prototype, canEat, canSwim)
//
// var fish = new goldFish('tuna')
// console.log(fish)
