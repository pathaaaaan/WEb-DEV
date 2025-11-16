let arr = [1,2,3,4,5]
let [a,b] = arr;
console.log(a,b);

let [x,y,,z] = arr;     // skps 3
console.log(x,y,z);

// making a copy of an array
let copy = [...arr]
console.log(copy);