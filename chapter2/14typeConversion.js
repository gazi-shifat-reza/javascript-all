var str = "1000"
var n =  10

console.log(Number(str));  //Number is a Constractor

console.log(n.toString());  //.toString is a Constractor

console.log(String(n));  //String is a Constractor

console.log(Number(Infinity));

console.log(Boolean(Infinity));  //Boolean is a Constractor
console.log(Boolean(-Infinity));

/* Constractor
String Number Boolean
*/

/* Falsy value - JS thinks below values are false by itself.
''
0
null
undifined
Nan
*/
/*other than all values are truethy values to JS machine.*/

console.log(Boolean(''));
console.log(Boolean('ahsisdf'));

console.log(Boolean(null));

console.log(Boolean(0));
console.log(Boolean(354));
