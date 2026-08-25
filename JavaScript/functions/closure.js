// function Createcounter() {
//     let count = 0;
//     function increment() {
//         count += 1;
//         return count;
//     }
//     return increment;
// }
// const counter = Createcounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



// use case 
// basically to prevent direct access to variable for example balance

// user = {
//     name: "Hasnain",
//     balance : 0,
//     deposit : function (amt){
//     if (typeof amt === "number" && amt > 0) {
//         this.balance += amt;
//         return this.balance;
//         }
//     },

//     getBalance : function () {
//         this.balance;
//     }
// }

// user.deposit(2300);
// console.log(user.deposit(2300)); 
// // but we can still access the balance
// balance = "xyz";


function createBankAccount() {
    let balance = 0;

    const user = {
      name: "Hasnain",
      deposit: function (amt) {
        if (typeof amt === "number" && amt > 0) {
          balance += amt;
          return balance;
        }
      },

      getBalance: function () {
        return balance;
      },
    };

    return user;
}

console.log(acc.deposit(3000));   // 3000

console.log(acc.getBalance());    // 3000

console.log(acc.balance);         // error