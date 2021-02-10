//Understanding map: Set() is a constructor function and a data structure

let map = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30]
])
map.set('d', 40)  //add new elements
map.delete('c') //delete any properties
console.log(map.size)  //for  size of the map.
console.log(map)

console.log(map.get('a')) //for know the any value of key
console.log(map.values()) //for only values
console.log(map.keys()) //for only keys

for(let [k, v] of map){  //for of destruct method[key, value]
  console.log(v, k)
}

map.forEach((v, k) => {  //forEach method
  console.log(v, k)
})
