//If 1st function is getting input from the output of 2nd function then we can call it functional composition.

function print(input){
  console.log(input)
}

function multiplyByFive(n) {
  return n * 5
}

function add(a, b) {
  return a + b
}

print(multiplyByFive(add(2,5)))
