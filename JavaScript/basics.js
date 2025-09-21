// console.log("hello");

// function sum(a,b){
//     return a+b
// }

// let add = sum(12,32)    //44
// let add1 = sum('12',32)  //1232
// let add2 = sum(parseInt('23'), 3412) //3435
// console.log(add2)      


// all this a synchronous js code -> sequential code execution 

// function series (n){
//     if(n == 0){
//         return 0;
//     }
//     return n + series(n-1);
// }

// console.log(series(5))

// IO heavy operations
// a lot of data tranfer bw 


// importing a module/package
// const fs = require("fs")
// const content = fs.readFileSync(
//   "/Users/hasnainpathan/Desktop/WEb DEV/JavaScript/hello.txt",
//   "utf-8"
// );
// console.log(content)


// Functional Arguments
function sum(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function Operations(a,b,op){
    return op(a,b)
}

const s = Operations(12, 32, sum);
console.log(s)