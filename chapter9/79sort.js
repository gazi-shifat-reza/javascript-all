//.sort() function is used for sorting an array to descending order and ascending order.
// Normally .sort() array doesn't give us right output, So that's why we will use a function and a logic along with the .sort() function.

var arr = [1, 2, 3, -8, 4, 5, -2, 6, 7, 8, 9]

var person = [
  {
    name: 'A',
    age: 21
  },

  {
    name: 'B',
    age: 19
  },

  {
    name: 'C',
    age: 26
  }
]


//*************************************************//


//Ascending order for array
arr.sort(function(a, b){
  if(a > b){
    return 1
    // return -1 (If we want to descending order)
  }
  else if(a < b){
    return -1
    // return 1 (if we want to descending order)
  }
  else{
    return 0
  }
})

console.log(arr);


//************************************************//


//Ascending order for the object.
person.sort(function(a, b){
  if(a.age > b.age){
    return 1
    // return -1 (If we want to descending order)
  }
  else if(a.age < b.age){
    return -1
    // return 1 (if we want to descending order)
  }
  else{
    return 0
  }
})
console.log(person);


//**************************************************//

//.every() function will check all the element are present in the array according the logic then it will print true else false.
//.some() function will check minimum one value is present in the array according the logic then it will print true else false.

var arr1 = [1,2,-3,45,67,-89,103,46,7,8,94,5,66]

var result = arr1.every(function(value){
  return value >= 0
})
console.log(result); // false

var result1 = arr1.some(function(value){
  return value % 2 == 0
})
console.log(result1); //true
