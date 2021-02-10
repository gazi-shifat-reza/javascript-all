var a = 4
var b = 12
var c = 44
var d = 45

if (a > b && c < d ) {
  console.log("A is greater than B and C is greater than D");
}
else{
  console.log("At least one condition is false");
}

if (a > b || c < d ) {
  console.log("At least one condition is true");
}
else{
  console.log("Both are false");
}

var check = !(a > b)
console.log(check);
