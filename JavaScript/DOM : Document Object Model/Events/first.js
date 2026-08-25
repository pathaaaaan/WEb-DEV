// function handle() {
//     const first = document.getElementById("first");
//     first.textContent = "Strike is Coming";
// }
const first = document.getElementById("first");

// first.onclick = function handle() {
//   const first = document.getElementById("first");
//   first.textContent = "Strike is Coming";
// };


// addEventListener(event, callback)

// first.addEventListener('click', () => {
//     first.textContent = "strike is coming";
// })
// first.addEventListener('click', () => {
//     first.style.backgroundColor = "pink";
// })

// const parent = document.getElementById("parent");
// for (let child of parent.children) {
    
//     child.addEventListener('click', () => {
//         child.textContent = "I was Clicked!!";
//     }) 
// }


// Event Bubbling
const grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click", () => {
    console.log('grandparent is clicked');
})
const parent = document.getElementById("parent");
parent.addEventListener("click", () => {
    console.log('parent is clicked');
})
const child = document.getElementById("child");
child.addEventListener("click", () => {
    console.log('chlid is clicked');
})