var para = document.querySelectorAll("#fancy");
para.forEach(element => {
    const arr = element.innerHTML.trim().split(" ");
    element.innerHTML = "";
    for(let i of arr) {
        const arr_new = i.split("");
        const p = document.createElement("span");
        p.setAttribute("id", "para")
        for(let j of arr_new) {
            var span = document.createElement("span");
            span.setAttribute("id", "letter")
            span.innerText = j;
            p.appendChild(span);
        }
        element.append(p);
    }
});