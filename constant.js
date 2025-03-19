const accountId = 4556
let accountEmail = "anchalmodi2022@gmail.com"
var accountPassword = "12345"
accountCity = "indore"
// these line print sentence provided in inside block
console.log("hello world")
// these table print all the values mention in te block 
console.table([accountEmail, accountId , accountPassword , accountCity]);

//output
/*
hello world
┌─────────┬────────────────────────────┐
│ (index) │ Values                     │
├─────────┼────────────────────────────┤
│ 0       │ 'anchalmodi2022@gmail.com' │
│ 1       │ 4556                       │
│ 2       │ '12345'                    │
│ 3       │ 'indore'                   │
└─────────┴────────────────────────────┘
*/

// important is that we can n ot change the value of const variables.

let space;
console.log(space);
// note --->> if we dont provide any value to the variable then it print undefine when we call to print that funtion
//output 
/*
hello world
┌─────────┬────────────────────────────┐
│ (index) │ Values                     │
├─────────┼────────────────────────────┤
│ 0       │ 'anchalmodi2022@gmail.com' │
│ 1       │ 4556                       │
│ 2       │ '12345'                    │
│ 3       │ 'indore'                   │
└─────────┴────────────────────────────┘
undefined
*/
// we use 99% let because in var we use compiler change the values of privious one without making new variable .