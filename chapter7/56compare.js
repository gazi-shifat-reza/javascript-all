var obj1 = {
  a: 45,
  b: 54
}
var obj2 = {
  a: 45,
  b: 54
}

if(obj1.a === obj2.a && obj1.b === obj2.b) //we have to compare every properties with every corresponding properties.
{
  console.log(true);
}
else {
  console.log(false);
}


//******************************//


//Using build-in method

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
/*Using the JSON.stringify() we can easily compare two objects*/
