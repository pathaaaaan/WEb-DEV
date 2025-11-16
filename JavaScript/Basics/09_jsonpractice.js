// json

const person = {
    name: "Hasnain Khan",
    age: 21,
    email:"hasnainkhan@gmail.com",
    isHuman: true,
    hobbies: ["coding","reading","movie-geek"],
    address :{
        city:"gadarpur",
        village:"Gularbhoj",
        pincode:262401
    }
};

//json.stringify()
const jsonstringgg = JSON.stringify(person);
console.log(jsonstringgg);