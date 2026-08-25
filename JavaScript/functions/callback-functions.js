// a function passed as an argument to another function is called callback
// recieving function is called higher-odrer function


function greet() {
    console.log("hello jii");
}

function dance() {
    console.log("I am dancing");
}

function meet(callback) {
    console.log("Meeting someone");
    callback();
    console.log("The end!!");
}

meet(greet);
meet(dance);