// While loop syntax: //

// var i = 0;
// while(i<=10){
// console.log("My name is shifat");
// i++
// }

//******************************//

var variable = true;
while (variable) {
  var random = Math.floor(Math.random() * 10 + 1) //take a random number
  if (random === 9) {
    console.log('Congratulations! You got chicken dinner.')
    variable = false
  }
  else {
    console.log('Sorry! you got ' + random);
  }
}
