// let score = 33 // case 1
// console.log(typeof score);

//case 2//
// let score = undefined
// console.log(typeof score);

//changeing datatypes number//
//  let valueinNumber = Number(score)
//  console.log(typeof valueinNumber);
//  console.log(valueinNumber);//NAN=> not a number.

//  //changing datatypes in string//
//  let valueinString = String(score)
//  console.log(valueinString);
//  console.log(typeof valueinString);


// 33=>33
//33abc=>NAN
//true=>1
//false=>0

let city="atna"
// let booleancity=Boolean(city)
console.log(city);

// 1=>True
//False=> false
//""=> false
//"abc"=>True

let Number = 12
let stringNumber= String(Number)
console.log(stringNumber);
console.log(typeof stringNumber);

let loggedIn = true
let booleanloggedIn = Boolean(loggedIn)
console.log(loggedIn);  
console.log(typeof booleanloggedIn);



///////////////////////////oprations///////////////////

//   for negative value

let value = 3
let negValue = -value
console.log(negValue);

// for calculations
console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);

// For adding string
let str1 = "hello"
let str2 =" shakir"
let str3 = str1 + str2
console.log(str3);


//behavior of string=> if string is in first, after  all the value will be treated as is it.only before string value will be calculated.
console.log("2" + 2 + 3); // output will be 223.
console.log(2 + 2 + "3"); // output will be 43

///prefix and postfix
let gameCounter = 100
++gameCounter;
console.log(gameCounter);// output will be 101.