// Iterator basic:

let arr = [1, 2, 3]

// function createIterator(collection){  //Our own iterator, manually build.
//   let i = 0
//   return {
//     next(){
//       return {
//         done: i >= collection.length,
//         value: collection[i++]
//       }
//     }
//   }
// }
// let iterate = createIterator(arr)

// [Symbol.iterator]() is a function for iterate any iteratable things. And It will make any object iterable.
//So if we want to iterate any object we need to use [Symbol.iterator]()

let iterate = arr[Symbol.iterator]()//This is how we have to write the function.
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

let str = 'NEXT'
let iterateText = str[Symbol.iterator]()
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())

/******************************************************************************/
