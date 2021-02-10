//Understanding set: Set() is a constructor function and a data structure. And we can't duplicate a date in a set. It has to be unique.

let set = new Set([1, 2, 3, 4, 5])  //this is the way to define a set.
// let set = new Set()
  set.add(4)
  set.add(5)  //can't duplicate
console.log(set)
console.log(set.size)

//some method of set.

set.clear() //clear the set
set.delete(3) //delete any property
console.log(set.has(2))  //tell the properties is present on not.
console.log(set)

let keyIterate = set.keys()
console.log(keyIterate.next())
console.log(keyIterate.next())
console.log(keyIterate.next())
console.log(keyIterate.next())
console.log(keyIterate.next())
console.log(keyIterate.next())

for(let v of set){  //using for of t get the value.
  console.log(v)
}
