function sumOfNumber(arr){
  sum = 0
  for(var i = 0; i<arr.length; i++){
    sum += arr[i]
  }
  return sum
  /*Return is very powerful. All the time we wont need console.log.
  Mainly we will use the return function. return will keep our output then
  afterword we can use the return function to keep our data to other variable.*/
}
arr1 = [2, 3, 4, 6, 2, 6]
// console.log(sumOfNumber(arr1));
test = sumOfNumber(arr1)
console.log(test);


//*****************************************************//


function person(name, email){
  return{
    /*We can use return without doing any code in function. We can even get any object by return */
    name: name,
    email: email
  }
}
var p1 = person('Gazi shifat reza', 'shifat44@gmail.com')
console.log(p1);
