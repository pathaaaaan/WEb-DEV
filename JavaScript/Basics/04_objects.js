// // key : value 
// const person = {
//     name : 'Hasnain',
//     age : 21,
//     gender : "male",
//     Course : "Btech CSE",
//     isprogrammer : true
// }
 
// // console.log(person);


// console.log(person.name);
// console.log(person['name']);
// // add new key:values
// person.batch = 2023
// console.log(person);

// delete person.Course
// console.log(person);


// const car = {
//     name : "Mustang",
//     properties : ["Racing Car","GT300","Green"],
// };

// console.log(typeof car);
// car.wheels = "front"
// console.log(car);
 
// const sym = Symbol("key1")
// const myUser = {
//     myname : "Hasnain",
//     age : 21,
//     email : "hasnainkhan@gmail.com",
//     isLoggedin : true,
//     location : "Gularbhoj",
//     [sym] : "mykey1"
// };
// console.log( myUser[sym]);

// // changing value
// myUser.email = "Hasnain@gehu.ac.in"
// // freezing object
// Object.freeze(myUser)
// console.log(myUser);

// let obj = {
//     name : "Hasnain",
//     age : 12,
//     email : "Hasnain@gmail.com"
// }

// for(let key in obj){
//     console.log(key ,obj[key]);
// }

// console.log(Object.keys(obj));
//[ 'name', 'age', 'email' ]

// console.log(Object.entries(obj));
//[
//   [ 'name', 'HAsnain' ],
//   [ 'age', 12 ],
//   [ 'email', 'Hasnain@gmail.com' ]
// ]


// console.log({...obj});
// { name: 'Hasnain', age: 12, email: 'Hasnain@gmail.com' }

// create new onject using old and with new extra values

// let obj2 = Object.assign({Course : "Btech CSE (AI/ML)"}, obj)
// console.log(obj2);


// deep clone
// let stringpbj = JSON.stringify(obj);
// let deepclone = JSON.parse(stringpbj);
// console.log(deepclone);
 