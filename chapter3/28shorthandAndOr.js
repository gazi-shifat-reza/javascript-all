var name = false

var fullName = name || "Gazi Shifat Reza"
console.log(fullName);

/* syntax for OR shorthand:
variable(truthy/falsy) || statement;
    (if the variable is falsy then only the statement will execute and if truthy the variable itself will execute)
*/

var isOk = true;
var situation = isOk && 'Everything is ok'
console.log(situation);

/* syntax for AND shorthand:
variable(truthy/falsy) && statement;
    (if the variable is truthy then only the statement will execute and if falsy the variable itself will execute)
*/
