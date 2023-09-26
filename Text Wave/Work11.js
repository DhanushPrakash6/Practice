var container = document.querySelector(".container");
var text = container.innerHTML;
container.innerHTML = "";
var delay = 0;
for(var i of text.split(" ")) {
    var para = document.createElement("span");
    for(var j of i) {
        delay += 0.03;
        var span = document.createElement("span");
        span.innerHTML = j;
        span.classList.add("animation");
        span.style.animationDelay = delay + "s";
        span.classList.add("span_tag");
        para.appendChild(span);
    }
    container.appendChild(para);
}