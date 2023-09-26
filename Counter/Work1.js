var value = document.querySelector(".num");
var decrease = document.querySelector(".minus");
var reset = document.querySelector(".reset");
var increase = document.querySelector(".plus");
function check() 
{
    if(parseInt(value.innerHTML) > 0) 
    {
        value.setAttribute("style", "color:green")
    }
    else if(parseInt(value.innerHTML) === 0)
    {
        value.setAttribute("style", "color:black")
    }
    else
    {
        value.setAttribute("style", "color:red")
    }
}
decrease.addEventListener("click", () => {
    value.innerHTML -=  1
    check()
});

reset.addEventListener("click", () => {
    value.innerHTML =  0
    check()
});

increase.addEventListener("click", () => {
    value.innerHTML = parseInt(value.innerHTML) +  1
    check()
});

