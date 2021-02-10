//Arithmatic Operator
// + - * / %
// ++ incremental
// -- decremental

var a = 10
var b = 20

console.log(a+b, a-b, a*b, a/b, a%b)

console.log(a++);  // here first print the value then increment
console.log(a);   // so now a got incremented.

console.log(++b);  //here first increment the value then print that's why we directly got the incremented value no need to one more console log()

// Same for the decremental operation.



//Assign operator

var a = 50      //This is simple assign operator.
var b = 40

a += b
console.log(a);

a -= b
console.log(a);

a *= b
console.log(a)

a /= b
console.log(a);

a %= b
console.log(a)



//Comparison operators

var x = 40
var y = 45

console.log(x == y);  //false
console.log(x != y);  //true

console.log(x < y);  //true
console.log(x > y);  //false

console.log(x <= y)  //true
console.log(x >= y)  //false


var x = '50'  //This is declear as a string
var y = 50  //This is declear as a Number.

console.log(x == y); //true; becouse == is not able to distinguish the data datatype

console.log(x===y);  //False; === can distinguish the data types. so it only compare string with string and number with number.

console.log(x !== y);



//Logical operators

//AND && - It will print true-> both have to be true
//OR || - It will print true-> minimun one have to be true
//NOT ! - It will print the reverse result


//Bitwise operators - For binary number
// and &
// or |
// not ~
// xor ^
// left shift(1bit) <<
// right shift(1bit) >>

console.log(typeof y);   //To know the type use typeof
console.log(typeof x);
