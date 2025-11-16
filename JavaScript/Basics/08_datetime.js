const currDate = new Date();
// console.log(currDate);
const year = currDate.getFullYear()
// console.log(year);
const month = currDate.getMonth()
// console.log(year);
const date = currDate.getDate()
// console.log(date);


// console.log(currDate.toDateString());//Mon Sep 22 2025

// console.log(currDate + 1);

let mydate = new Date(2023, 0, 23);
// console.log(mydate.toDateString());

console.log(Date.now());   // in ms
console.log(Math.floor(Date.now() / 1000));   // in ms
