// rest operator
// function Add(...nums) {
//     let sum = 0;
//     for (let n of nums) {
//         sum += n;
//     }
//     console.log(sum);
// }

// Add(1, 2, 3, 45, 5);
// Add(1, 2, 3, 5,54,8,78,45,65,65);
// Add(1, 2, 3); 
// -------------------------------------------------
// spread operator
// const arr = [10, 20, 30, 40, 50]
// const arr2 = [1,2,3,4,7,5]
// const [first, second, ...num] = arr;
// console.log(first, second, num);

// const ans = [...arr, ...arr2]
// console.log(ans);

// -------------------------------------------------


// function expression
// addNumb = function (n1, n2) {
//     console.log(n1+n2);
// }

// addNumb(12,32)

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

// Arrow Fucntion
// method 1:

// const addNumb = (n1, n2) => {
//     console.log(n1+n2);
// }

// method 2: 
// const addNumb = (n1, n2) => n1 + n2;

// addNumb(12,32)

// -------------------------------------------------


// returning an object using arrow function
// note :  when there is zero or one argument no need of 'return'
// const greeting = () => ({
//     name: "Hasnain",
//     age : 12
// })

// console.log(greeting());

// -------------------------------------------------
// -------------------------------------------------

// immediately invoked function IIFE ()()
(function greeting() {
    console.log("Hello");
})();

(() => {
    console.log("Hii");
})()