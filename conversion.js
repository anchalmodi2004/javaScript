//variable declare
let score = "33"

console.log(typeof score);//simple check type
console.log(typeof (score));//as a meathod

let valueInNumber = Number(score)// conversion string to number

console.log(typeof valueInNumber);//simple check type
console.log(typeof (valueInNumber));//as a meathod
console.log(valueInNumber);  // print value of a number

//when we convert
/*
"33"--> 33
true --> 1
false --> 0
any string --> not a number
"33abd"--> NaN
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//conversion result 1--> true 0--> false anyValue--> true blankspace-->false

let someNumber = 33;
let StringNumber = String(someNumber);
console.log(StringNumber);
