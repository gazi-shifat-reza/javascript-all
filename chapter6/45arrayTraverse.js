/*Array Traverse is basically a method where each and every element
of the  array will be touched*/

var arr = [23, 54, 43, 54, 32]   //typical array traverse
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('\n');

//***************************************//


//Adding 2 with every element of the array and replace into the array
var arr = [23, 54, 43, 54, 32]
for (var i = 0; i < arr.length; i++) {
  arr[i]+=2
}
console.log(arr);
console.log('\n');

//****************************************//

//Sum of all the elements of the array
var arr = [23, 54, 43, 54, 32]
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  var result = arr[i]+sum
  console.log(arr[i] + ' + ' + sum + ' = ' + result);
    sum = result
}
console.log('total' + ' = ' + sum);
console.log('\n');

//****************************************//

//sum of all even number in an array
var arr = [1, 2, 3, 4, 5]
sum = 0
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    var result = arr[i]+ sum
    console.log(arr[i] + ' + ' + sum + ' = ' + result);
    sum = result
  }
}
console.log(result);
console.log('\n');

//********************************************//

//sum of all odd number in an array.
var arr = [1, 2, 3, 4, 5]
console.log('The array is')
for(i=0; i<arr.length; i++){
  console.log(arr[i]);
}
console.log('So the sum of all even number of this array:');
sum = 0
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    var result = arr[i]+ sum
    console.log(arr[i] + ' + ' + sum + ' = ' + result);
    sum = result
  }
}
console.log('Final:' + result);
