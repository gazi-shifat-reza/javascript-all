 // print the below pattern using nested loop
 // 1
 // 1 2
 // 1 2 3
 // 1 2 3 4 5

var n = 10;
 for(i = 1; i <= n; i++){
   var result = ''
   for(j = 1; j <=i; j++){
     result += j + ' ';
  }
  console.log(result);
 }

//=====================================//

// print the below pattern
// ******
// ******
// ******
// ******
// ******
// ******


var n = 6;
 for(i = 1; i <= n; i++){
   var result = ''
   for(j = 1; j <=n; j++){
     result += '* ';
  }
  console.log(result);
 }
