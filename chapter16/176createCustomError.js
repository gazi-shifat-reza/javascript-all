class customError extends Error{  //This is the custom Error in ES6
  constructor(msg) {
    super(msg)

    if(Error.captureStackTrace){
      Error.captureStackTrace(this, customError)
    }
  }
}
try{
  console.log('I am line 1')
  throw new Error('I am your error')
  console.log('I am line 2')
  console.log('I am line 3')
} catch(e) {
  console.dir(e)
  console.log('this is your custom error message')
}
finally{
  console.log('It must print in finally block')
}
