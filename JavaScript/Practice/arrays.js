// const arr = ["hasnain", 1,"1212"]
// console.log(arr);

// fruits = [
//     "apple",
//     "Banana",
//     "Cherry",
//     "Guava"
// ]

// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push("grapes")
// console.log(fruits);
// fruits.shift()      // remove from beg
// console.log(fruits);
// fruits.unshift("orange")    // add at beginning
// console.log(fruits);

// const veggies = [
//     "shimla",
//     "bhindi",
//     "gobhi"
// ]

// console.log(fruits.concat(veggies));

// console.log(fruits.join("/"));

// console.log(fruits.reverse());
// const numb = [1, 4, 5, 2, 3, 6];
// console.log(fruits.sort());
// console.log(numb.sort());

// let arrr = [1,2,3,4,5,6]
// arrr.push(12)
// arrr.push(13);
// arrr.pop()  //remove last value i.e 13
// arrr.shift()    //remove first value => 1
// arrr.unshift(1) //adds 1 at beginning
// console.log(arrr.splice(2, 4)); // removes values in range
// console.log(arrr);  //[ 1, 2, 12 ]
arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.slice(1, 4));  // return a copy of arr in range start, end-1
// arr.reverse(); //reverse original arr
// console.log(arr);

// let newarr = arr.sort(function(a,b){
//     return a-b // ascedning order
//     //return b-a //descedning order
// })
// console.log(newarr);

// map => creates new array based on the original array and some condition or function

// let double = arr.map(function(val){
//     return val*2
// })

// console.log(double);
// // [2, 4, 6, 8, 10, 12, 14];

// let chhate = double.filter(function(val){
//     if(val>4){
//         return true;
//     }
// })      //skips false values
// console.log(chhate);

// console.log((double.reduce(function(accumulator, val){
//     return accumulator + val;
// },0)));     //0=> accumulator ki initial value, and it is static means it remembers it last value

// let one = arr.find(function(val){
//     return val===1;
// })

// console.log(one);

marks = [323, 43, 42, 5, 2, 53, 34, 656, 75, 76];

let any = marks.some(function (val) {
  if (val % 3 == 0 && val % 5 == 0) {
    return true;
  }
});
console.log(any);
