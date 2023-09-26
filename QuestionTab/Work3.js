var icon = document.querySelectorAll(".icon")
icon.forEach((icon) => {
icon.addEventListener("click", () => {
    var para = icon.parentElement.parentElement.querySelector("p")
    para.classList.toggle("toggle");
    if(icon.classList.contains("fa-square-plus"))
        icon.classList.replace("fa-square-plus", "fa-square-minus")
    else 
        icon.classList.replace("fa-square-minus", "fa-square-plus")       
});
});