//closure is when a function is able to remember and access it's lexical scope even when that function executing outside of it's lexical scope.

// able to remember and access it's lexical scope
//when that function executing outside of it's lexical scope.

// function test(){
//   var msg = 'I am learning javascript'
//   function sayMsg(){
//     console.log(msg);  //able to remember and access it's lexical scope
//   }
//   sayMsg()
// }
// test()



function test(){
  var msg = 'I am learning javascript'

  return function(){
    console.log(msg);
  }
}

var sayMsg = test()
sayMsg() //function executing outside of it's lexical scope
