//This is new syntax for arrow function.

// let add = (a, b) => {
//   return a+b
// }
// console.log(34, 3)
//
// let sum = (a, b) => a + b  //If we have one line instruction
// console.log(4, 5)
//
// let sqr = x => x*x  // if we have one parameter and one line instruction
// console.log(4)




/*
-> The arrow function doesn't have any 'this' it always refers parent's this whatever his parent is window or any Object

-> We cant use bind, call, apply for invoking 'this' from outside

-> When we declare any object, we should create method with normal function keyword for use 'this' function but inside method we will use arrow function for creating function.
*/

let obj = {
  name: 'Gazi Shifat Reza'
  print: function(){
    setTimeOut(() => {
      console.log(this)
      console.log( `Hello, This is ${this.name}`)
    },1000)
  }
}

obj.print()
