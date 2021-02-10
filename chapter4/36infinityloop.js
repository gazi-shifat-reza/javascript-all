for (;;) { // here initializer and condition both are empty so it will run infinite time.
  var random = Math.floor(Math.random() * 10 + 1) //take a random number
  if (random === 9) {
    console.log('Congratulations! You got chicken dinner.')
    break;
  }
  else {
    console.log('Sorry! you got ' + random);
  }
}
