const user = {
    username: "Hasnain",
    price: 999,
    welcomeMsg: function () {
        console.log(`${this.username}, welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMsg()
// console.log(this);      // global object in browser

// function one() {
//     console.log(this);
// }
// one()


// const chai = () => {
//     console.log("chai aur JS");
// }

// chai()

// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2)
// console.log(add(12,234));