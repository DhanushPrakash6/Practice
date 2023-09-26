const left_arrow = document.querySelector("#arrow span:nth-child(1) i");
const right_arrow = document.querySelector("#arrow span:nth-child(2) i");
const container = document.querySelector(".container");
var mov = 0;
left_arrow.addEventListener("click", ()=>{
    mov += 45;
    console.log(mov);
    container.setAttribute("style", `transform: perspective(1000px) rotateY(${mov}deg);`);
});
right_arrow.addEventListener("click", ()=>{
    mov -= 45;
    console.log(container);
    container.setAttribute("style", `transform: perspective(1000px) rotateY(${mov}deg);`);
});