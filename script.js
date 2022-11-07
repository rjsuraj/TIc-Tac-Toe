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

function win(no1,no2,no3){
    if (MatchRecord[no1] == MatchRecord[no2] && MatchRecord[no1] == MatchRecord[no3]) {
        console.log(MatchRecord[no1], " win")
        upper.lastElementChild.innerHTML = `<p>${MatchRecord[1]} - Win</p>`
    
        window[`b${no1}`].classList.add("win")
        window[`b${no2}`].classList.add("win")
        window[`b${no3}`].classList.add("win")
        window[`b${no1}`].classList.add("noHover")
        window[`b${no2}`].classList.add("noHover")
        window[`b${no3}`].classList.add("noHover")
     
        for(let i = 0;i<9;i++){
            ClickCount[i] = 2
        }

        if(player1.classList.contains("selected")){
            player1.classList.add("Notselected")
            player1.classList.remove("selected")
        }
        else{
            player2.classList.add("Notselected")
            player2.classList.remove("selected")
        }
    }
}

function CheckLine(no) {
    if (no == 1) {
        win(1,2,3)
    }
    else if (no == 2) {
        win(5,2,8)
    }
    else if (no == 3) {
        win(9,3,6)
    }
    else if (no == 4) {
        win(1,4,7)
    }
    else if (no == 5) {
        win(5,4,6)
    }
    else if (no == 7) {
        win(5,7,3)
    }
    else if (no == 8) {
        win(9,8,7)
    }
    else if (no == 9) {
        win(1,5,9)
    }
}

function PlayingTurn(no) {
    flag = false

    if (Xturn == true && ClickCount[no - 1] == 0) {
        Xturn = false
        Oturn = true

        ClickCount[no - 1] = 1
        let Totalmoves = 0;
        for (let i = 0; i < 9; i++) {
            Totalmoves = Totalmoves + ClickCount[i];
        }
        console.log("Totalmoves-", Totalmoves)



        player2.classList.add("selected")
        player2.classList.remove("Notselected")

        player1.classList.add("Notselected")
        player1.classList.remove("selected")



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

        if (Totalmoves != 9) {
            upper.lastElementChild.innerHTML = `<p>O - Turn</p>`
        }
        else {
            upper.lastElementChild.innerHTML = `<p>GameOver - Draw</p>`
            if(player1.classList.contains("selected")){
                player1.classList.add("Notselected")
                player1.classList.remove("selected")
            }
            else{
                player2.classList.add("Notselected")
                player2.classList.remove("selected")
            }
        }
        // storing match results
        MatchRecord[no] = "X"

    }
    else if (Oturn == true && ClickCount[no - 1] == 0) {
        Oturn = false
        Xturn = true

        ClickCount[no - 1] = 1
        let Totalmoves = 0;
        for (let i = 0; i < 9; i++) {
            Totalmoves = Totalmoves + ClickCount[i];
        }
        console.log("Totalmoves-", Totalmoves)


        player1.classList.add("selected")
        player1.classList.remove("Notselected")

        player2.classList.add("Notselected")
        player2.classList.remove("selected")




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

        if (Totalmoves != 9) {
            upper.lastElementChild.innerHTML = `<p>X - Turn</p>`
        }
        else {
            upper.lastElementChild.innerHTML = `<p>GameOver - Draw</p>`
            if(player1.classList.contains("selected")){
                player1.classList.add("Notselected")
                player1.classList.remove("selected")
            }
            else{
                player2.classList.add("Notselected")
                player2.classList.remove("selected")
            }
        }

        // storing match results
        MatchRecord[no] = "O"
    }

    if (no == 1) {
        if (ClickCount[0] != 2) {
            CheckLine(1)
            CheckLine(4)
            CheckLine(9)
        }
    }
    else if (no == 2) {
        if (ClickCount[1] != 2) {

            CheckLine(1)
            CheckLine(2)
        }
    }
    else if (no == 3) {
        if (ClickCount[2] != 2) {
            CheckLine(1)
            CheckLine(3)
            CheckLine(7)
        }
    }
    else if (no == 4) {
        if (ClickCount[3] != 2) {

            CheckLine(4)
            CheckLine(5)
        }
    }
    else if (no == 5) {
        if (ClickCount[4] != 2) {

            CheckLine(5)
            CheckLine(2)
            CheckLine(9)
            CheckLine(7)
        }
    }
    else if (no == 6) {
        if (ClickCount[5] != 2) {

            CheckLine(5)
            CheckLine(3)
        }
    }
    else if (no == 7) {
        if (ClickCount[6] != 2) {

            CheckLine(4)
            CheckLine(7)
            CheckLine(8)
        }
    }
    else if (no == 8) {
        if (ClickCount[7] != 2) {

            CheckLine(8)
            CheckLine(2)
        }
    }
    else if (no == 9) {
        if (ClickCount[8] != 2) {

            CheckLine(8)
            CheckLine(9)
            CheckLine(3)
        }
    }


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

footer = document.getElementsByClassName("footer")[0]
restart = footer.firstElementChild

restart.addEventListener("click", () => {
    Xturn = true
    Oturn = false
    flag = true

    for(let i = 0;i<9;i++){

        ClickCount[i] = 0
    }
    
    for(let i = 1;i<=9;i++){

        MatchRecord[i] = "none"
    }

    if(player1.classList.contains("Notselected")){

        player1.classList.remove("Notselected")
        player1.classList.add("selected")
    }
    if(player2.classList.contains("selected")){
        player2.classList.remove("selected");
        player2.classList.add("Notselected")
    }

    upper.lastElementChild.innerHTML = `<p>Start game or select player</p>`

    b1.innerHTML = ""
    b2.innerHTML = ""
    b3.innerHTML = ""
    b3.innerHTML = ""
    b4.innerHTML = ""
    b5.innerHTML = ""
    b6.innerHTML = ""
    b7.innerHTML = ""
    b8.innerHTML = ""
    b9.innerHTML = ""

    if(b1.classList.contains("win")){
        b1.classList.remove("win")
        b1.classList.remove("noHover")
    }
    if(b2.classList.contains("win")){
        b2.classList.remove("win")
        b2.classList.remove("noHover")
    }
    if(b3.classList.contains("win")){
        b3.classList.remove("win")
        b3.classList.remove("noHover")
    }
    if(b4.classList.contains("win")){
        b4.classList.remove("win")
        b4.classList.remove("noHover")
    }
    if(b5.classList.contains("win")){
        b5.classList.remove("win")
        b5.classList.remove("noHover")
    }
    if(b6.classList.contains("win")){
        b6.classList.remove("win")
        b6.classList.remove("noHover")
    }
    if(b7.classList.contains("win")){
        b7.classList.remove("win")
        b7.classList.remove("noHover")
    }
    if(b8.classList.contains("win")){
        b8.classList.remove("win")
        b8.classList.remove("noHover")
    }
    if(b9.classList.contains("win")){
        b9.classList.remove("win")
        b9.classList.remove("noHover")
    }
})