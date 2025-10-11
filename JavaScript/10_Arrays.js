// Arrays in JavaScript
let teas = ["green tea","masala chai","adrak chai"]
console.log(teas);

let arr = new Array("hasnain")
console.log(arr);

console.log(teas[0]);


let teascoftcopy = teas;  // soft copy same pool object
let hardcopy = [...teas]  // hard copy diff object in pool

let arr1 = [1,2,3]
let arr2 = [43,53]

let merge = arr1 + arr2  // creates string
let merge2 = arr1.concat(arr2);
console.log(merge2);
console.log(merge);

console.log(arr1.includes(1));   //true