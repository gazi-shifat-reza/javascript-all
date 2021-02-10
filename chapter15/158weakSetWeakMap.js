// weakSet: weakSet is used for Object reference and it only use in object.

let a = {a: 10}, b = {b: 20}
// let set = new Set([a, b])
// a = null //null means it will delete from the object but in set it didn't. so here we have to use weakSet.
// console.log(set)


let weakSet = new WeakSet([a, b])
a = null
console.log(weakSet.has(a))  //now a has completely lost.
console.log(weakSet.has(b))



//weakMap and weakSet are absolutely same.

let weakMap = new WeakMap([[a, 34], [b, 43]])

a = null

// console.log(weakMap.get(a))
console.log(weakMap.has(a))
