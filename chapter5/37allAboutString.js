/* Escape Notation
  \- for print buildin notation
  \n- for new line
  \t- for get a tab
  \r- for carriage return
  \v- Vertical tab
  \b- Backspace
  \f- form feed
*/

var str = 'This is a \'String\''
console.log(str);
var str1 = 'My name is \fshifat'
console.log(str1);


/* Compare two string :
Smallest to largest
A < Z < a < z
A is the smallest number
z is the largest number.
*/

console.log('a' < 'A');  //false
console.log('z' > 'A');  //true



// String method by javascript:
var a = 'I am'
var b = 'Shifat'
var c = a.concat(' ',b);  //It will concat two variable
var d = c.substr(6)  //It will subtract the string from 6 no alphabet.
var d = c.substr(5,3) //It will subtract the string from 5 to next 3 alphabet
var d = c.charAt(0)  //It will print which alphabet at 0.
console.log(c);
console.log(d);


var x = "I love Bangladesh"
console.log(x.startWith(I)); //it will print true if the string is start with I else print false

console.log(x.endWith(a));  //it will print true if the string is end with I else print false

console.log(x.toUpperCase()); //It will print all the character uppercase

console.log(x.tolowerCase()); //It will print all the character lowercase

console.log('       shifat         '.trim());  //.trim() function will print only the text and skip the all the space.

console.log(x.split(' ')); //.split() will split the x variable in word by adding space in between the word and make a array.
