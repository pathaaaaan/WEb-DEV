// let value = 3
// let newval= -value

const { log } = require("node:console");

// console.log(true)

// let num, num2, num3
// num = num2 = num3 = 2 + 2


// comparison of daatypes
// console.log(22 > 32)    // false
// console.log('42' > 32)  // true
// console.log(null > 0)   // false
// console.log(null < 0)   // false
// console.log(null == 0)  // false
// console.log(null >= 0)  // true
// console.log("2" === 0)  // false


//Arrays, Objects, Functions
const heroes = ["shaktiman","Naagraj", "krrish"]

let obj = {
    name : "hitesh",
    age : 21
}
console.log(obj);


const Myfunction = function(){
    return "Hello World!!!"
}
console.log(Myfunction())

// Return tyoe of typeof => 
/*
undefined - undefined
boolean - boolean
null- object
number - number
String - string
....
*/


// Memory 
//Stack (Primitive), Heap (Non Primitive)

let myname = "Hasnain khan"     // Stack
let anothername = myname
anothername = "pathaaaaan"
console.log(myname);
console.log(anothername);

let obj1 = {
  name: "hitesh",
  age: 21,
};
let obj2 = {
  name: "hitesh",
  age: 2,
};