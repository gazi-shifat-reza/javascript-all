//Hide private data with symbol.

const _radius = Symbol() //have to use Symbol() to hide the properties and method.
const _name = Symbol()
const _draw = Symbol()

class Circle {
  constructor(radius, name){
    this[_radius] = radius  //properties name should keep in square bracket.
    this[_name] = name
  }

  [_draw]() {
    console.log('Drawing....')
  }
}

let c1 = new Circle(3, 's')
c1.draw  // not showing any data bcz of hiding
console.log(c1)

/*****************************************************************************/

//Hide Private properties with WeakMap()

const _radius = new WeakMap() //have to use new along with WeakMap() to hide the properties and method.
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
  constructor(radius, name){
    this.size = 100
    _radius.set(this, radius)  //properties have to use set and this object in parentheses.
    _name.set(this, name)

    _resize.set(this, () =>{  //This is for method.
      console.log(this.size)
    })
  }

  get radius(){  //We can get access to the properties by using get keyword.
    return _radius.get(this)
  }

  set radius(v){  // we can set any data to the properties
    _radius.set(this, v)
  }

  draw() {
    console.log('Drawing....')
    console.log(_radius.get(this), _name.get(this))
    _resize.get(this)()
  }
}

let c1 = new Circle (2, 'red')
c1.draw()
c1.radius = 100  //here is the set properties
console.log(c1.radius)  //here we get the properties
