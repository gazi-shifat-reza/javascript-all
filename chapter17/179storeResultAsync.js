// function sayMyName(name){
//   let result
//   setTimeout(() =>{
//     result = name
//     console.log('I have done')
//   },3000)
//   return result
// }


// let output = sayMyName('shifat')  //We can't keep our result in other variable which is from a asynchronous function. it will show undefined.
// console.log(output)

//What is happening here is, as the function is asynchronous function so it wont wait for any statement, it will execute all the statement. so, when setTimeout() function is waiting for 3 sec at the same time output variable stored the function result. But at that time it is holding for 3 sec. That's why it didn't get any result to store so it print undefined. So we can't keep our result in other variable which is from a asynchronous function. it will show undefined. We have to do inside the asynchronous function what we want to do.



//The solution for this is:

function sayMyName(name){

  setTimeout(() =>{

    console.log(name)
  },3000)
}

let output = sayMyName('shifat')
console.log(output)
