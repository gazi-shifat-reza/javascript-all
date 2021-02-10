// curring is basically a way to organize your code when have to pass so many arguments. So it will pass only one argument at a time and take another function inside and that function will get another arguments like that.


function currying(a){
  return function(b){
    return function(c){
      return a + b + c
    }
  }
}

var result = currying(5)(10)(15) //this is the way to pass the arguments to the currying function.

console.log(result);
