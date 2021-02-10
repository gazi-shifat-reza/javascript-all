try{
  console.log('I am line 1')
  throw new Error('I am your error')  //This is build in error throw, at anywhere we can throw this error.
  console.log('I am line 2')
  console.log('I am line 3')
} catch {  //we don't need to give () after catch. This is new features.
  console.log(e.message)
}
finally{
  console.log('It must print in finally block')
}

//If we have some work which has to done even after the error throw that we can keep into finally block.
