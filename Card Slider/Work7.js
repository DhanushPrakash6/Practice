// var container = document.querySelector(".container")
var container=document.querySelector(".container")
// console.log(container);
console.log(container);
var box = document.querySelectorAll(".box");
var pos = 0;
var index = 1;
function pos_move() {
    box[index - 1].style.opacity = "0.3";
    box[index - 1].querySelector("div").style.display = "none";
    box[index - 1].style.transform = "scale(1)";
    box[index].querySelector("div").style.display = "";
    box[index].style.transform = "scale(1.1)";
    box[index].style.opacity = "1";
    if(pos < 2030)
    {
        pos += 300
        index += 1
    }
    container.style.transform = `translateX(-${pos}px)`;
    
}

if(pos < 2030)
    setInterval(pos_move, 2000)