//Error handling with if else (basic)

// function changeToInt(v) {
//   let result = Number.parseInt(v)
//   if(!result){
//     return ('Please provide a value which is able to convert in Integer')
//   }
//   return result
// }

// let result = changeToInt('63.82')
// console.log(result)


/******************************************************************************/

// Error handling with try catch method
// try{
//   execute the main code
// } catch(e){
//   the error message
// }

// function makeWords(text){
//   try{
//     let str = text.trim()
//     let words = str.split(' ')
//     return words
//   } catch(e){
//     console.log('please provide a valid text')
//   }
// }
// let result = makeWords(8383829)
// console.log(result)

/*****************************************************************************/

// try{
//   console.log('I am line 1')
//   throw new Error('I am your error')  //This is build in error throw, at anywhere we can throw this error.
//   console.log('I am line 2')
//   console.log('I am line 3')
// } catch {  //we dont need to give paranthesis () after catch. This is new features.
//   console.log('this is your custom error massege')
// }
// finally{
//   console.log('It must print in finally block')
// }

//If we have some work which has to done even after the error throw that we can keep into finally block.

/******************************************************************************/

// class customError extends Error{  //This is the custome Error in ES6
//   constructor(msg) {
//     super(msg)

//     if(Error.captureStackTrace){
//       Error.captureStackTrace(this, customError)
//     }
//   }
// }
// try{
//   console.log('I am line 1')
//   throw new Error('I am your error')
//   console.log('I am line 2')
//   console.log('I am line 3')
// } catch(e) {
//   console.dir(e)
//   console.log('this is your custom error massege')
// }
// finally{
//   console.log('It must print in finally block')
// }
