//...rest is used as a parameter of a function. and ...rest have to use as a last parameter.
//...spread is used to spread the function and object.

function sum(...rest){
  return rest.reduce((a,b) => a + b)
}
sum(45,6,3,25,67)

let a = [1,2,3,4]
console.log(...a) //now it will spread the array

let obj = {
  a: 30,
  b: 23,
  c: 33
}

let obj2 = {
  ...obj //This will spread the obj.
}

/**************************************************************************/

let a = 10, b = 20

let obj = {
  a,  //if variable and value are same we can write direct like this
  b,
  print(){  //in method we don't need to write function. direct write like this.
    console.log(this)
  }
}

obj.print()
