// Manual method to get the character length.

var str = 'Gazi Shifat Reza'
var length = 0;
while(true){
  if (str.charAt(length) === '') {  //charAt() is for get the char at particular index.
    break
  }
  else {
    length++
  }
}
console.log(length);

//**************************************************//

console.log(str.length);  //.length method is for get the length of any character.

console.log('sljhfsdfjasdjfojsdfasdjhfoajsdoifsdfsdi'.length);
