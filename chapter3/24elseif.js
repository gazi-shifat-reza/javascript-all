var a = 20
var b = 20

//If possible outcome are more than 2 then use elseif conditions

if(a > b){
  console.log( a + " is greater than " + b);
}
else if(a < b){
  console.log(a + " is lesser than " + b);

  //we can use as many as else if condition, if it requires.
}
else{     //always else condition have to use at the last
  console.log("Both are same");
}


//************************************//

var n = 0

if(n === 0){
  console.log("The number is zero");
}
else if(n % 2 === 0){
  console.log(n + " is the even number");
}
else{
  console.log(n + " is the odd number");
}
