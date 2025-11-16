// Immediately Invoked Function Expressions
// ()()

(function chai() {
    console.log("Db connected");
})();

(() => {
    console.log("Db connected successfully.");
})();


((name) => {
  console.log(`${name} connected successfully.`);
})("hasnain"); 