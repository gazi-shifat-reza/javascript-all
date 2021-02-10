//.filter() function will return a new array by filtering some condition.
//.filter() syntax:
//.filter(function(value, index, array){
// conditions
// })

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var filteredArray = arr.filter(function(value){
  return value % 2 == 0
})
console.log(filteredArray);


//********************************//

//.filter() behind the scene.

function myFilter(arr, cb){
  var newArr = []
  for(i = 0; i < arr.length; i++){
    if(cb(arr[i], i, arr)){
      newArr.push(arr[i])
    }
  }
 return newArr
}
console.log(myFilter(arr, function(value){
  return value > 5
}))

console.log(myFilter(arr, function(value){
  return value % 2 == 0
}));
