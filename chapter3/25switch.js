var date = new Date()

var today =   date.getDay()

//sunday-0, monday-1, tuesday-2, wednesday-3, thursday-4, friday- 5 saterday-6

switch(today){      /* This is the switch syntax*/

  case 0:
  console.log("Today is Sunday")
  break;

  case 1:
  console.log("Today is Monday");
  break;

  case 2:
  console.log("Today is Tuesday");
  break;

  case 3:
  console.log("Today is Wednesday");
  break;

  case 4:
  console.log("Today is Thursday");
  break;

  case 5:
  console.log("Today is Friday");
  break;

  case 6:
  console.log("Today is Saterday");
  break;

  default:
  console.log("unvalid number");
}
