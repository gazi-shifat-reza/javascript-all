//Symbol creates unique identifier and any two Symbol never be same.

let s1 = Symbol()
let s2 = Symbol('test')

console.log(s1)
console.log(s2)

console.log(s1 === s2)

let toss = {
  Head: Symbol('Head')
  Tail: Symbol('Tail')
}
