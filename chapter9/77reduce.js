//.reduce() function will take 2 elements from an array and do some operation and keep in a new array, so the array becomes smaller.
//.reduce() function syntax:
//.reduce(function(previous value, current value, current index, array), initial value(initial value is optional))

var arr = [1, 2, 3 , 4, 5]

var sum = arr.reduce(function(prev, curr){
  return prev + curr
}, 100)
console.log(sum);

var max = arr.reduce(function(prev, curr){
  return Math.max(prev, curr)
}, 4)

console.log(max);


//*************************************//
//behind the scene

function myReduce(arr, cb, acc){
  for(i = 0; i < arr.length; i++){
    acc = cb(acc, arr[i])
  }
  return acc
}

var sum = myReduce(arr, function(prev, curr){
  return prev + curr
}, 100)
console.log(sum);

var sub = myReduce(arr, function(prev, curr){
  return prev - curr
}, 100)
console.log(sub);

var mul = myReduce(arr, function(prev, curr){
  return prev + curr
}, 100)
console.log(mul);
