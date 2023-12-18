var container = document.querySelector(".container");
for(var i = 0; i < 500; i++) {
    var span = document.createElement("span");
    container.appendChild(span);
}

let cursor = document.querySelector("#cursor");
window.onmousemove = e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}