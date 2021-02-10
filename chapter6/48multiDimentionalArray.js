/*Two dimensional array:
var array2D = [
  [],
  [],
  [],
  []
]
*/


// first array = i = row
// second array = j = column



/*Three dimensional array:
var array3D = [
  [
    [],
    [],
    []
  ]
  [
    [],
    [],
    [],
  ]
  [
    [],
    [],
    []
  ]
]
*/


// How to traverse the 2D or 3D array.

var arr2D = [
  [2, 3, 4, 7],
  [4, 5, 9, 10],
  [11, 15, 25, 45]
]

// console.log(arr2D);
for(i=0; i<arr2D.length; i++){
  for(j=0; j<arr2D[i].length; j++)
  console.log('Element ' + i + j + ': ' + arr2D[i][j]);
}

//For 3D array just use one more loop
