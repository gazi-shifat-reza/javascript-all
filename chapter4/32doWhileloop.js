// Syntax for do while loop :

// do{
//   Statement
// }while( conditions )

/*The main difference between the while loop and do while loop is While loop will stop if the first condition itself is false. But do while loop will always
execute the first statement even if the condition is false*/

//*************************************************//

var isRunning = false;
while(isRunning){
  console.log('This is an example of while loop');
}

do{
  console.log('This is an example of do while loop'); // the statement will execute forcefully even if the condition is false.
}while(isRunning)
