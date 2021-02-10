//.forEach syntax:
//.forEach(function(value, index, array))

var arr = [1, 2, 3, 4, 5, 6, 7]
// //This .forEach() is for print all the value, index and full array
// arr.forEach(function(value, index, arr){ //have to maintain the order.
//   console.log(value, index, arr);
// })

// sum = 0
// arr.forEach(function(value, index, arr){
//   sum += value //Here only sum of the array will print
// })
// console.log(sum);


//****************************//
//.forEach() behind the scene

function forEach(arr,cb){
  for(i=0; i<arr.length; i++){
    cb(arr[i], i, arr)
  }
}
var sum = 0
forEach(arr, function(value, index, array){
  console.log(value, index, array);
  sum += value
})

// console.log(sum);

forEach(arr, function(value, index, arr){
  arr[index] = value+5
})
console.log(arr);
