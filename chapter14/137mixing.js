//Mixing: inheritance + compositions
//Object.assign(base, source)->base will be an object which will concate with other sources.

function mixing(target, ...sources){
  Object.assign(target, ...sources)
}


var canWalk = {
  walk: function() {
    console.log('Walking...')
  }
}

var canEat = {
  eat: function() {
    console.log('Eating...')
  }
}

var canSwim = {
  swim: function(){
    console.log('Swimming...')
  }
}
// var person = Object.assign({}, canWalk, canEat)  //literal way
// person.name = 'Gazi Shifat'
// console.log(person)

function Person(name){  //Construction way
  this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)

mixing(Person.prototype, canWalk, canEat)

var p1 = new Person('Gazi shifat')
console.log(p1)

function goldFish(name){
  this.name = name
}

mixing(goldFish.prototype, canEat, canSwim)

var fish = new goldFish('tuna')
console.log(fish)
