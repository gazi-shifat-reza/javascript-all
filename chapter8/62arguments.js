function add(a, b, c) {  //Here a, b, c are the parameter
  result = a + b + c
  console.log(result);
}

add(6,7,8)  //This is parameter
add(73, 826, 0)


//*******************************************//


function sumOfArray(arr) {
  var sum = 0
  for(var i= 0; i<arr.length; i++) {
    sum+= arr[i]
  }
  console.log(sum);
}

array1 = [1,2,3,4]
array2 = [34, 55, 83, 86]

sumOfArray(array1) // here array1, array2 are arguments
sumOfArray(array2)


//**********************************************//

/*arguments is very useful object when we don't give any parameter and we
want to add or subtract or any other operation for unlimited time. And also arguments is very essential and powerful Object*/

function addAll(){
  var sum = 0
  for(i = 0; i < arguments.length; i++){ //using arguments
    sum += arguments[i]
  }
  console.log(sum);
}
addAll(3,4,5,6,7,12,1000)
