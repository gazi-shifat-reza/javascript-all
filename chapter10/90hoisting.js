/* A function can be called at anywhere above and below. It doesn't matter where the function created but the variable must be declared first before the variable is using because of creational phase and executional phase. */

abc() // will be work

function abc(){  //this function can be called anywhere above and below
  console.log('I am new function');
}
abc() //will be work.

/************************************************************/

// newAbc()  //this will not work because the function is in the variable. so it has to be called after the function has created.

var newAbc = function(){
  console.log('I am new ABC function');
}
newAbc() //now it will work.

/************************************************************/
//Hoisting
// Hoisting is a process where it decides where the values are accessible and what will be the assigning of creational and executional phase.

var a = 100

print(10)

var newPrint = print
newPrint(45)

function print(a){
  console.log(a);
}

print(a)

// crational phase:
// var a = undif
// var newPrint = undif
// print = ref

// executional phase:
// a = 10
// 10
// newPrint = print
// 45
// print = 100
// 100
