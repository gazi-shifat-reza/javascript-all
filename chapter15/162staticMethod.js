//ES6 static method: Static method is nothing but a method where we can call a method without create any new instance.

class Person {
  constructor(name, email){
    this.name = name
    this.email = email
  }

  print() {
    console.log(this.name, this.email)
  }

  static create(str){ //static method have to use static
    let person = JSON.parse(str)  //json parse
    return new Person(person.name, person.email)
  }
}

let str = '{"name": "Gazi Shifat Reza", "email": "shifat@gmail.com"}' //JSON string

let p1 = Person.create(str)  //Here we direct call create method withOut use new
console.log(p1)
console.log(p1 instanceof Person)
p1.print()
