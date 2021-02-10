// .find() and .findIndex() are used for find the value and index number respectively.
// syntax:(both are same syntax)
// .find(function(value, index, arr, object))

var arr = [1,2,,3,4,5,6,7,70]
var result = arr.find(function(value){
  return value === 6
})
console.log(result); //it will work better in object

var result1 = arr.findIndex(function (value){
  return value === 5
})
console.log(result1); //It returns the index of the value.


//***************************************************//

//behind the scene for .find()
function myFind(arr,cb){
  for(i = 0; i < arr.length; i++){
    if(cb(arr[i]))
    return arr[i]
  }
}

var result2 = myFind(arr, function(value){
  return value === 4
})
console.log(result2);


//***************************************************//

//behind the scene for .findIndex()
function myFindIndex(arr,cb){
  for(i = 0; i < arr.length; i++){
    if(cb(arr[i]))
    return i
  }
}

var result3 = myFindIndex(arr, function(value){
  return value === 2
})
console.log(result3);
