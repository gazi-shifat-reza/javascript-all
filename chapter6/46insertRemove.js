//Insert and Remove data form an array.

var arr = [2,3,4,5,6,7,9]
arr[3] = 0; //this way 0 will be added to index 3 but previous element will be completely remove.

arr.push(9)  //This way 9 will be added into the very last index to the array

arr.unshift(9)  //This way 9 will be added into the first index to the array


arr.splice(4, 0, 12, 13)  /*This is the right way to insert an element into an
array. syntax: .splice(index, delete element, insert element )*/



arr[4] = undefined; // This is simple remove an element form array

arr.pop() //It will remove an element from the last index.

arr.shift() //It will remove an element from the first index.

arr.splice(1, 2) //It will delete 2 element from index 1
console.log(arr);
