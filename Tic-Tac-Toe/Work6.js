var tiles = document.querySelectorAll(".container div span");
var outer = document.querySelectorAll("container");
var final = document.querySelector("#pass");
var reset = document.querySelector(".reset");
var str = "X";
var state = 1
tiles.forEach((item) => {
    item.addEventListener("click", cellClickHandler(item));
});

function checkWinner(symbol, arr) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
      
    return winningCombinations.some(combination =>
      combination.every(index => arr[index] === symbol)
    );
}

function loop() {
    const arr = [];
    tiles.forEach((item) => {
        arr.push((item.innerHTML));
    });
    
    if (checkWinner("X", arr)) {
        final.innerHTML = "X Wins";
        tiles.forEach((item) => {
            item.removeEventListener("click", cellClickHandler(item));
        });
        
    } else if (checkWinner("O", arr)) {
        final.innerHTML = "O Wins";
        tiles.forEach((item) => {
            item.removeEventListener("click", cellClickHandler(item));
        });
        
    } else if (arr.every(cell => cell !== "")) {
        final.innerHTML = "Match Draw!";
    }
    else {
        final.innerHTML = "";
    }      
};

function cellClickHandler(item) {
    item.parentElement.addEventListener("click", () => {
        item.style.color = "white";
        if(item.innerHTML === "") {
            item.innerHTML = str;
            loop();
            if(str === "X")
                str = "O";
            else 
                str = "X";
        }
    });
}

reset.addEventListener("click", () => {
    tiles.forEach((item) => {
        item.innerHTML = "";
        final.innerHTML = "";
    });
});
