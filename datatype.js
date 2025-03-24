"use strict"; // treated all JS code as a never version
//alert(3+3) // we are using nodejs , not browser.

// important point is that space are otomatically ignored but code readibility should be high..

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//symbol => unique

console.log(typeof "Anchal"); // output string
console.log(typeof undefined);//output undefined
console.log(typeof null);//output object

// *********************summary.js************
/* types of data
1. primitive
2. non primitive(referrence)

#primitive(call by value)
1--> string
2--> Number
3--> boolean
4--> null
5--> undefined
6-->symbol
7--> BigInt
*/

/* 
#refernce(non primitive)
Array
object
funtions
*/

// javascript is a dynamic value

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id==anotherId);//hence boot are not same
const bigNumber = 3458692145n

// bignumber bnane kai liye last mai n lgana hota hai bas

//#array
const heros = [ "shaktiman" ,"naagraj","doga"];
let myobj = {
    name: "Anchal",
    age:21,

}
// simple we say that in []simple bracket we represent array (seprated by comma and in the double inverted braces(""))
// simple we say that in {}curly bracket we represent object (seprated by comma and after name we apply colln(:))


// #funtion 
const myFuntion = function () {
    console.log("Hello World");
    
}
