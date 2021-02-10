// What is pure functions
// -> it returns the same result if given the same arguments
// -> it does not cause any observable side effects.

function sqr(n){
  return n*n
}

console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(3));

// here sqr(n) function is the pure functions coz it always returns the same result and it does not cause any observable side effects

//***************************************************//

var n=10

function change(){
  n = 100
}
change()
console.log(n);
// this is not pure function coz change function changes the n values. so it has the side effects.

//**************************************************//

var point = {
  x: 10,
  y: 40
}

function changePoint(point){
  point.x = 50
  point.y = 50

  console.log(point);
}
changePoint(point)

console.log(point);

//This is also not a pure function bcz it changes the point object. so it has the side effect and not a pure function.
