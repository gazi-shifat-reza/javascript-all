
var arr = [1, 2, 3, 4, 5]
var arr1 = [45, 34, 64, 76, 21]

console.log(arr.join('| '));  //.join() method will separate the all the element of an array by the sign inside of the parentheses and give a string output.

arr1.fill(true)  //.method will fill all the element by the value inside of the parentheses, it can be any string, integer and boolean value.

var arr2 = arr1.concat(arr) //.concat() method will concat two array and make a multidimensional array.
console.log(arr2);

console.log(Array.isArray(arr1)); //Array.isArray() is function for checking whether the input is array on not. it returns boolean value.

console.log(Array.from(arr2)); //Array.from() function make an another array from the array inside the parentheses. And The array will be the different array and it wont have any connection with parent array.
