// prototype based => extra properties and functionalities given based on datatyep

let computer  = {cpu:12}
let lenovo = {
    screen : "HD",
    __proto__ : computer
}
let hardware = {};
console.log(`computer`,computer.__proto__);