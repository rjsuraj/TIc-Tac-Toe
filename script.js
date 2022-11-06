let Xturn = true
let Oturn = false
let ClickCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let flag = true
let MatchRecord = {
    1: "none",
    2: "none",
    3: "none",
    4: "none",
    5: "none",
    6: "none",
    7: "none",
    8: "none",
    9: "none"
}


let player2 = document.getElementById("player2")
let player1 = document.getElementById("player1")
let upper = document.getElementsByClassName("upper")[0]

function CheckLine(no){
    if (no == 1) {
        if (MatchRecord[1] == MatchRecord[2] && MatchRecord[1] == MatchRecord[3]) {
            console.log(MatchRecord[1], " win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[1]} - Win</p>`
        }
    }
    else if (no == 2) {
        if(MatchRecord[5] == MatchRecord[2] && MatchRecord[5] == MatchRecord[8]){
            console.log(MatchRecord[5]," win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[5]} - Win</p>`
            
        }
    }
    else if (no == 3) {
        if(MatchRecord[9] == MatchRecord[3] && MatchRecord[9] == MatchRecord[6]){
            console.log(MatchRecord[9]," win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[9]} - Win</p>`
            
        }
    }
    else if (no == 4) {
        if(MatchRecord[1] == MatchRecord[4] && MatchRecord[1] == MatchRecord[7]){
            console.log(MatchRecord[1]," win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[1]} - Win</p>`
        }
    }
    else if (no == 5) {
        if(MatchRecord[5] == MatchRecord[4] && MatchRecord[5] == MatchRecord[6]){
            console.log(MatchRecord[5]," win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[5]} - Win</p>`
            
        }
    }
    else if (no == 7) {
        if(MatchRecord[5] == MatchRecord[7] && MatchRecord[5] == MatchRecord[3]){
            console.log(MatchRecord[5]," win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[5]} - Win</p>`
            
        }
    }
    else if (no == 8) {
        if(MatchRecord[9] == MatchRecord[8] && MatchRecord[9] == MatchRecord[7]){
            console.log(MatchRecord[9]," win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[9]} - Win</p>`
            
        }
    }
    else if (no == 9) {
        if(MatchRecord[1] == MatchRecord[5] && MatchRecord[1] == MatchRecord[9]){
            console.log(MatchRecord[1]," win")
            upper.lastElementChild.innerHTML = `<p>${MatchRecord[1]} - Win</p>`
        
        }
    }
}

function PlayingTurn(no) {
    flag = false
    if (Xturn == true && ClickCount[no - 1] == 0) {
        Xturn = false
        Oturn = true


        player2.classList.add("selected")
        player2.classList.remove("Notselected")

        player1.classList.add("Notselected")
        player1.classList.remove("selected")

        ClickCount[no - 1] = 1


        if (no == 1) {
            b1.innerHTML = "X"
        }
        else if (no == 2) {
            b2.innerHTML = "X"
        }
        else if (no == 3) {
            b3.innerHTML = "X"
        }
        else if (no == 4) {
            b4.innerHTML = "X"
        }
        else if (no == 5) {
            b5.innerHTML = "X"
        }
        else if (no == 6) {
            b6.innerHTML = "X"
        }
        else if (no == 7) {
            b7.innerHTML = "X"
        }
        else if (no == 8) {
            b8.innerHTML = "X"
        }
        else if (no == 9) {
            b9.innerHTML = "X"
        }

        upper.lastElementChild.innerHTML = `<p>O - Turn</p>`

        // storing match results
        MatchRecord[no] = "X"

    }
    else if (Oturn == true && ClickCount[no - 1] == 0) {
        Oturn = false
        Xturn = true

        player1.classList.add("selected")
        player1.classList.remove("Notselected")

        player2.classList.add("Notselected")
        player2.classList.remove("selected")

        ClickCount[no - 1] = 1

        if (no == 1) {
            b1.innerHTML = "O"
        }
        else if (no == 2) {
            b2.innerHTML = "O"
        }
        else if (no == 3) {
            b3.innerHTML = "O"
        }
        else if (no == 4) {
            b4.innerHTML = "O"
        }
        else if (no == 5) {
            b5.innerHTML = "O"
        }
        else if (no == 6) {
            b6.innerHTML = "O"
        }
        else if (no == 7) {
            b7.innerHTML = "O"
        }
        else if (no == 8) {
            b8.innerHTML = "O"
        }
        else if (no == 9) {
            b9.innerHTML = "O"
        }


        upper.lastElementChild.innerHTML = `<p>X - Turn</p>`

        // storing match results
        MatchRecord[no] = "O"
    }

    if(no==1){
        CheckLine(1)
        CheckLine(4)
        CheckLine(9)
    }
    else if(no==2){
        CheckLine(1)
        CheckLine(2)
    }
    else if(no==3){
        CheckLine(1)
        CheckLine(3)
        CheckLine(7)
    }
    else if(no==4){
       CheckLine(4)
       CheckLine(5)
    }
    else if(no==5){
        CheckLine(5)
        CheckLine(2)
    }
    else if(no==6){
        CheckLine(5)
        CheckLine(3)
    }
    else if(no==7){
        CheckLine(4)
        CheckLine(7)
        CheckLine(8)
    }
    else if(no==8){
        CheckLine(8)
        CheckLine(2)
    }
    else if(no==9){
        CheckLine(8)
        CheckLine(9)
        CheckLine(3)
    }

    let sum = 0;
    for(let i = 0;i<9;i++){
        sum = sum + ClickCount[i];
    }
    console.log("Totalmoves-",sum)
}

player1.addEventListener("click", () => {
    if (flag == true) {
        upper.lastElementChild.innerHTML = `<p>X - Turn</p>`
        flag = false
        Xturn = true
        Oturn = false
    }
})

player2.addEventListener("click", () => {
    if (flag == true) {
        upper.lastElementChild.innerHTML = `<p>O - Turn</p>`
        player2.classList.add("selected")
        player2.classList.remove("Notselected")

        player1.classList.add("Notselected")
        player1.classList.remove("selected")
        flag = false
        Xturn = false
        Oturn = true
    }
})

b1.addEventListener("click", () => {
    PlayingTurn(1)
})

b2.addEventListener("click", () => {
    PlayingTurn(2)
})

b3.addEventListener("click", () => {
    PlayingTurn(3)
})

b4.addEventListener("click", () => {
    PlayingTurn(4)
})

b5.addEventListener("click", () => {
    PlayingTurn(5)
})

b6.addEventListener("click", () => {
    PlayingTurn(6)
})

b7.addEventListener("click", () => {
    PlayingTurn(7)
})

b8.addEventListener("click", () => {
    PlayingTurn(8)
})

b9.addEventListener("click", () => {
    PlayingTurn(9)
})


