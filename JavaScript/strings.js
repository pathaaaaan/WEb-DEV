const { log } = require("node:console")
const { type } = require("node:os")

const myname = "hasnain"
const lastname = "khan"
//unformatted string
// console.log(myname + " " +  lastname)

// fromatted string => string intercollation
// console.log(`Hello my name is ${myname} ${lastname}`)


let gamename = new String("Spider-Man")
console.log(gamename)
console.log(typeof(gamename)) // => object

console.log(gamename.charAt(2))
console.log(gamename.indexOf('M'))
console.log(gamename.substring(2,5))
console.log(gamename.slice(-8))
gamename = "    Spider-Man    "
console.log(gamename.trim())

let str = "hasnai khan jbusbs. jbdhb hbdbhd"
console.log(str.split('.'))