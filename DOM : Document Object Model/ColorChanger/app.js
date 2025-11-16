const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (event) {
    // console.log(event);
      // console.log(event.target);
      if (event.target.id === "grey") {
          body.style.backgroundColor = event.target.id;
      }
      else if (event.target.id === "yellow") {
          body.style.backgroundColor = event.target.id;
      }
      if (event.target.id === "blue") {
          body.style.backgroundColor = event.target.id;
      }
      else if (event.target.id === "white") {
            body.style.backgroundColor = event.target.id;
      }
  })
})
