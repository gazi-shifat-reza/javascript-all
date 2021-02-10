// Error handling with try catch method
// try{
//   execute the main code
// } catch(e){
//   the error message
// }

function makeWords(text){
  try{
    let str = text.trim()
    let words = str.split(' ')
    return words
  } catch(e){
    console.log('please provide a valid text')
  }
}
let result = makeWords(8383829)
console.log(result)
