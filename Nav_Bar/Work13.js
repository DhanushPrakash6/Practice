var nav = document.querySelectorAll(".inner-icon");
var bar = document.querySelector(".nav-bar");
nav.forEach(item => {
    item.addEventListener("click", () => {
        bar.style.left = ((item.getAttribute("data-move") * 100) + 10) + 'px';
    });
});