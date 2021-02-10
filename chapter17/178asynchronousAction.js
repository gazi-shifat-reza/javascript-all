console.log('I am line one')

setTimeout(() =>{
  console.log('I am line two')
}, 3000)

setTimeout(() =>{
  console.log('I am line three')
}, 1000)

console.log('I am line four')

setTimeout(() =>{
  console.log('I am line five')
}, 0)


//setTimeout() is a asynchronous function where we can set our time for execute. And as this is asynchronous function so it wont wait for any statement to finish. Whichever statement will come fast it will execute.
