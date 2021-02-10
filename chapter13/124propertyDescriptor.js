var person = {
  name: 'Gazi Shifat Reza'
}

//Property Descriptor is an object.
//To see property descriptor:
// Object.getOwnPropertyDescriptor(object, property)

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name') //(object name, properties name) which object of which properties wanna see.
//   console.log(descriptor)


// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)


Object.defineProperty(person, 'name',{
  enumerable: false,
  writeable: false,
  configureable: false,
  value: 'GS Reza'
})
