// Error handling with if else (basic)

function changeToInt(v) {
  let result = Number.parseInt(v)
  if(!result){
    return ('Please provide a value which is able to convert in Integer')
  }
  return result
}

let result = changeToInt('63.82')
console.log(result)
