console.log("JavaScript is connected!");

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
    // console.log(e.clientX, e.clientY);
    
    const div = document.createElement('div');
    div.textContent = 'hi';
    div.classList.add('circle');
    const color = ['red', 'blue', 'orange', 'pink', 'purple', 'green']
    
    div.style.backgroundColor = color[Math.floor(Math.random() * 6)]

    div.style.top = `${e.clientY-25}px`
    div.style.left = `${e.clientX-25}px`

    body.append(div);

    setTimeout(() => {
        div.remove();
    }, 5000);
});
