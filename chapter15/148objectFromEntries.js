let obj = {
  a: 10,
  b: 20
}

console.log(Object.entries(obj))  //Object.entries() method used for create an array from an object.


let objArr = [
  ['a', 10],
  ['b', 10],
]

console.log(Object.fromEntries(objArr))  //Object.fromEntries() method used for create an object from an array
