/* For loop syntax:
    for(initializer; condition; increment){
    //statement
  }
 */

 // simple loop function
  for(i=0; i<10; i++)
 {
   console.log((i+1) + " This is for loop");
 }

// //*********************************************//

//checking the number is ever or odd using for loop
for(j=1; j<=10; j++){
  if (j % 2 === 0) {
    console.log(j + " is even number");
  }
  else{
    console.log(j + " is odd number");
  }
}

//********************************************//

//add the number 1 to 10
var sum = 0;
for(i=1; i<=10; i++)
{
  var result = sum + i
  console.log(sum + '+' + i + '=' + result);
  sum = result
}
console.log('result' + ' = ' + sum);

//******************************************//

//add only even number from 1 to 10
var sum = 0
for(i=1; i<10; i++){
  if (i % 2=== 0) {
    var result = sum + i
    console.log(sum + ' + ' + i + ' = ' + result);
    sum = result
  }
}
console.log('result' + ' = ' + result);
