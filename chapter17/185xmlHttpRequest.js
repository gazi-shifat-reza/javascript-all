// const xhr = new XMLHttpRequest()
// xhr.open('get', 'http://jsonplaceholder.typicode.com/users')
//
// xhr.onreadystatechange = function(e){
//   if (xhr.readyState === 4){  // 4 means state is ready
//     if (xhr.status === 200){  //200 means everything is alright.
//       let users = JSON.parse(xhr.response) //parse the response to Javascript object or array from JSON.
//       console.log(users)
//     } else{
//       console.log(xhr.status)
//     }
//   }
// }
//
// xhr.send()  //request send


//But above code works for only one request. so we created a function for multiple request.



function getRequest(url, callback){
  const xhr = new XMLHttpRequest()
  xhr.open('get', url)

  xhr.onreadystatechange = function(e){
    if (xhr.readyState === 4){
      if (xhr.status === 200){
        let response = JSON.parse(xhr.response)
        callback(null, response)

      } else {
        callback(xhr.status, null)
      }
    }
  }
  xhr.send()
}  

getRequest('http://jsonplaceholder.typicode.com/users', (err, res) => {
  if (err){
    console.log(err)
  } else{
    console.log(res)
  }
})

getRequest('http://jsonplaceholder.typicode.com/posts', (err, res) => {
  if (err){
    console.log(err)
  } else{
    res.forEach(r => console.log(r.title))
  }
})
