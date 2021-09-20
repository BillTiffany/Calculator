const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  reader.question("Howdy, what's your name?", function(answer) {
    console.log("Hi " + answer);
  });
  


const name = "Bill"

let age = 39

console.log("this is the name variable,", name);
console.log("this is the age variable", age);

const isCool = true; 
let car = null;

let height; 

let x = 4;

let y = 10;

let z = 7+8;

let sum = x+y;

console.log(x+y+z);
console.log(height);
console.log(sum);

let str = "This is a string,\r\n";
let strTwo = " this is a second string, \r\n "
let strThree = ` this is my name: ${name}, \r\n 
and this is my age ${age}` ;

let strings = str + strTwo + strThree 

console.log(strings)
