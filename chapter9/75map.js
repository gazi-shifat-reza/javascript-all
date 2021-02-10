//.map() function is update the array and put in a new array
//.map() function syntax:
//.map(function(value, index, array))

var arr = [1, 2, 3]
// var sqrArr = arr.map(function(value){
//   return value * value
//
// })
// console.log(arr)
// console.log(sqrArr)

//******************************************//

// .map() behind the scene.

function myMap(arr,cb){
  var newArr = []
  for(i = 0; i < arr.length; i++){
    var temp = cb(arr[i], i, arr)
    newArr.push(temp)
  }
  return newArr
}

// console.log(map(arr))

var qb = myMap(arr, function(value){
  return value * value * value
})
console.log(qb);

var mTen = myMap(arr, function(value){
  return value * 10
})
console.log(mTen);
