const name = "Anchal";
const repoCount = 50;

console.log(name + repoCount+"value");//output Anchal50value

// latest news jab bhi syntax ke bich mai value print karvani ho to ${} ye use karenge or iske under likhenge kya or konsi value print karvani hai
// and most important ye (``) is wale symbol kai ander hota hai

console.log(`my name is ${name} and my repo count is ${repoCount}`);

//declaration
const gameName = new String('Anchal')

console.log(gameName[0])//use to print index word
console.log(gameName.__proto__) //use to find number of object

console.log(gameName.length);//finding length of the string
console.log(gameName.toUpperCase());//finding uppercase of the of the string
console.log(gameName.charAt(2));// isse apn dekh sakte hai konse index par konsa character hai
console.log(gameName.indexOf('t'));// ye btata hai ki deya gaya character konsi position par hai
console.log(gameName.indexOf('c'));// ye btata hai ki deya gaya character konsi position par hai

const newString = gameName.substring(0,4);// it does not allow negative value
console.log(newString);

const anotherString = gameName.slice(-6,2);// it allowed negative value
console.log(anotherString);

const newString1 = "   Anchal   "
console.log(newString1);
console.log(newString1.trim());// use to remove the space in the code


const url = "https://anchal.com/anchal %20modi"
console.log(url.replace('%20' ,'_'));//use to replace the values

console.log(url.includes('anchal'));
// use to check these word is present or not in the given line

console.log(gameName.split('a'));// spilt on the basis on given chacter or symbol
