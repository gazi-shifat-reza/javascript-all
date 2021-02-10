//This is a method to do manually reverse an array

arr = [3,4,5,6,7,8]
for (var i = 0; i < (arr.length / 2); i++) {
  var temp = arr[i]
  arr[i] = arr[arr.length- 1 - i]
  arr[arr.length - 1 - i] = temp
}
console.log(arr);

//Using below build-in function we can easily reverse an array.
console.log(arr.reverse());
