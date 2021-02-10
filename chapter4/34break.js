  while (true) {
  var random = Math.floor(Math.random() * 10 + 1) //take a random number
  if (random === 9) {
    console.log('Congratulations! You got chicken dinner.')
    break;   //here if we got number 9 then the loop wil terminate.
  }
  else {
    console.log('Sorry! you got ' + random);
  }
}


//===================================================================//

for(i=1; i<=10; i++){
  if (i%5 === 0) {
    break;
  }
  else {
    console.log(i + " is a number ");
  }
}
