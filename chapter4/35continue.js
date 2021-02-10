/*Continue statement will skip some statement which will mention in if condition  */

for(i=0; i<=10; i++){
  if (i === 4 || i === 7 || i === 9) {
    continue // here the continue will skip 4, 7, 9 this number in the iteration and execute all 10 number without 4, 7, 9
  }
  else {
    console.log(i);
  }
}
