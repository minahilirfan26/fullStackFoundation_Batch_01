// var num  = 1;
// // num = num + 2;
// // num++; //+1
// alert(num++); 
// alert(num) //2
// num++; //2 =>3
// alert(num) //3


// var num = 1;
// alert(num); //1
// alert(++num); //2
// alert(++num); //3
// alert(++num); //4
// alert(++num); //5

// var num = 10;
// alert(num); //10
// alert(--num); //9
// alert(--num); //8
// alert(--num); //7
// alert(--num); //6

// var total = 4 + 5 - 7 * (2 / 2);
// alert(total);

// var a = 3;
// var b = 2;

// alert(a++ * --b + b-- + ++b * ++a);
//     3   * 1  + 1  +  1   * 5
//      3 + 1 + 5

var a = 6;
var b = 2;
var totalNum = a++ / b-- - ++a + ++a;
alert(totalNum); //4
//    6   / 2  -    8   + 9
//      3     -   8 + 9
//3 + 1 = 4
//10
//14
//-12.5
//-11
//-6
//13
//-10
//-23
//-29

var c = 3;
var d = 5;

alert(++c - ++d * --d + c--);
//     4  -  6  * 5   + 4
//     4 - 30 + 4
//     4 - 26
//    -22
//25
//22
//29
//23//-22