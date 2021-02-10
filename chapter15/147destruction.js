let person = {
  name : 'shifat',
  email : 'shifat@gmail.com',
  address: {
    city: 'dhaka',
    country: 'Bangladesh'
  }
}

//This is the new way to get any properties from an object.
let{name, email, address, address: {city, country}} = person //person is the object from where we want to extract.

console.log(name, email, address, city, country)
