// let abc = document.getElementById("abc");
// let classabcd = document.getElementsByClassName("abcd");
// list of class

// let h1 = document.querySelector("h1"); // selects first h1

// -------------------------------------------------
// let h1 = document.querySelectorAll("h1");
// array tpe structure list of h1 tags

// console.dir(h1);
// h1.textContent = "Hello hasnain kaise ho";

// -------------------------------------------------

// attribute selection and manipulation
// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");
// or
// a.href = "https://www.google.com"

// -------------------------------------------------

// let img = document.querySelector("img");

// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1542641734-3b824eaabad0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=900"
// );
// img.width = 100
// img.height = 100

// console.log(img.getAttribute("width"));
// img.removeAttribute("width")

// -------------------------------------------------

// adding element to html

// create element
// let h1 = document.createElement("h1")
// h1.textContent = "hello bby";

//append element
// document.body.append(h1);
//or
// document.querySelector("body").append(h1);

const div = document.createElement("div");
div.className = "main";
div.id = "idd";
div.setAttribute("title", "generated title");
div.style.background("orange");
div.style.padding = "12px";
// div.textContent = "Chai aur Code";
const addText = document.createTextNode("chai aur code");
div.appendChild(addText);

document.body.appendChild(div);
