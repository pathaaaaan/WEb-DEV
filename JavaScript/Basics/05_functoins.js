// // definition
// // function greet(){
//     // console.log("Good Morning");
// // }
// //call
// // greet();


// // // function with parameters
// // function SayHello(name){
// //     console.log(`hello ${name}`);
// // }

// // SayHello("Hasnain")



// // function with return 

// // function add(n1, n2){
// //     return n1+n2
// // }

// // console.log(add(12,34));

// // function expression

// // const greeting = function(user){
// //     console.log(`Hello ${user}`);
// // }

// // greeting("MJ")

// // Callback functon => function passed as an argument

// // function showCall(func){
// //     const val = 10;
// //     return func(val);
// // }

// // showCall(function(Value){
// //     console.log(Value);
// // });

// /////////////////////////////////////////////////////////////////
// //functions basics

// // function greet(name){
// //     console.log(`hello ${name}`);
// // }

// // greet("Hasnain")

// /////////////////////////////////////////////////////////////////
// //function inside a function
// // function order(teatype){
// //     function confirm(){
// //         console.log("Order PLaced.");
// //     }
// //     return confirm();
// // }

// // order("chai");
// /////////////////////////////////////////////////////////////////
// // arrow function

// // const calculate = (price, qty) => {
// //     return price * qty;
// // }

// // const calculate = (price, qty) =>  price * qty;

// // const total = calculate(121.89, 132);
// // console.log(total); // 16089.48

// /////////////////////////////////////////////////////////////////
// // function test (){
// //     console.log(this);
// // }

// // test();

// /////////////////////////////////////////////////////////////////
// // function passed as parameters
// // eg. 1
// function sayHello() {
//   console.log("Hello!");
// }

// function greet(callback) {
//   callback(); // call the function we got as parameter
// }

// greet(sayHello);  // Output: Hello!


// //eg.2. Anonymous functions
// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// // Passing different functions as parameters
// console.log(calculate(5, 3, function(x, y) { return x + y; })); // 8
// console.log(calculate(5, 3, function(x, y) { return x * y; })); // 15

// // eg. 3
// function fetchData(onSuccess, onError) {
//   let success = true; // pretend condition (like data fetched)

//   if (success) {
//     onSuccess("Data received!");
//   } else {
//     onError("Something went wrong!");
//   }
// }

// // Pass arrow functions as callbacks
// fetchData(
//   (message) => console.log("Success: " + message),
//   (error) => console.log("Error: " + error)
// );



// // practice

// function createTeaMaker(){
//     return function(teatype){
//         return `Making ${teatype} tea!!!`;
//     };
// }

// let teaMaker = createTeaMaker()
// console.log(teaMaker("Masala"));


// //default param
// function add(v1=0, v2 = 0){
//   return v1+v2
// }
// add(1,2)  //3
// add()     //0


// rest or spread
// function add(...val){
//   console.log(val);
// }
// add(1,2,4,2,5,3,4,5,3,4,5,)


// higher order function => jo ya to accept kre ek function ya return kre 
// 1.
// function abcd(val){
//   val();
// }

// abcd(function(){
//   console.log("hof");
// })

// // 2.
// function abcd(){
//   return function(){
//     console.log("hof");
//   };
// }

// abcd()();


// closures
// ek function Jo return Karega ek aur function or return Hone wala function Hamesha use Karega parent function variable

// function abcd(){
//   let a = 12;
//   return function(){
//     console.log(a);   // parent functoin variable
//   }
// }



// Immediately invoked function expression

// (function (){
//   console.log("Call ho chuka hai already");
// })();



// hoisting
// function ko declare krne ses pahle use krna

// abcd(); // call

// function abcd(){
//   console.log("Hello brother");
// }

// won't work like this here but....

// abcd();
// let abcd = function(){
//   console.log("hihehe");
// }



// sum of numbers
// function sum(...val){
//   let total = 0;
//   val.forEach(function(score){
//     total += score;
//   });
//   console.log(total);
// }

// sum(1,2,3,4,5,6);

