/* How to search a data from an array*/

//Way number one
var arr = [18, 12, 43, 74, 5, 16]
var found = 45
var isFound
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === found) {
    isFound = 'Data is found at index ' + i;
    break
  }
  else{
    isFound = 'Data not found'
  }
}
console.log(isFound);


//Way number two
var arr1 = [2,33,4,23,42,3,34,8]
var found = 33
var isFound = false
for(i = 0; i<arr1.length; i++){
  if(arr1[i] === 33){
    console.log('Data is found at index ' + i);
    isFound = true;
    break;
  }
}
if(!isFound){
  console.log('Data not found');
}
