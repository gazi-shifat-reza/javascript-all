// var str = `Hi This is shifat
// I love javascript
// and I always do`
 //Multiline string with ``
//   console.log(str.trim())


var name = 'Shifat'
var age = 15

console.log(`My name is ${name}, I am ${age} and I am ${age < 18 ? 'not ' : ''}adult`)

console.log(name.padStart(20, '*')) //padStart method will fill 20 character from start point with *
console.log(name.padEnd(15, '@')) //padEnd method will fill 15 character from end point with @
console.log('s'.repeat(15)) //repeat method will repeat that character 15 times.
