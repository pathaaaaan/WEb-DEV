const fs = require("fs")

function print(err,data){
    console.log(data)
}


// readFile asynchronous function
const content = fs.readFile("/Users/hasnainpathan/Desktop/WEb DEV/JavaScript/hello.txt", "utf-8", print);
// whenever it is done reading it'll call the read function... 
console.log(content)