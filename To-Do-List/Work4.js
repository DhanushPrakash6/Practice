var input_box = document.querySelector("#input");
var submit = document.querySelector("#submit");
var list = document.querySelector(".list");
var tick = document.querySelectorAll(".tick");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    var div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `<span style="font-size: medium; font-weight:400; width:18vw; font-family:Lato;">${input_box.value}</span>
    <div class="icon-box">
    <i class="fa-solid fa-square-check icon-tick tick"></i>
    <i class="fa-solid fa-square-xmark icon-tick wrong"></i>
    </div>`;
    if(input_box.value != ""){
        list.append(div);
    }
    input_box.value = "";
    var wrong = document.querySelectorAll(".wrong");
    var tick = document.querySelectorAll(".tick");
    wrong.forEach((item) => {
        console.log(item);
        item.addEventListener("click", () => {
            item.parentElement.parentElement.remove();
        });
    }); 

    tick.forEach((item) => {
        item.addEventListener("click", () => {
            item.parentElement.parentElement.querySelector("span").style.textDecoration = "line-through";
            item.parentElement.parentElement.style.backgroundColor = "grey";
        })
    });
});

