class TicTacToe
{
    constructor()
    {
        this.container = document.getElementById("contain-all")

        this.Board = document.createElement("div")
        this.Board.id = "tac-board"
        
        for (let index = 1; index < 10; index++) {
           let caseBoard = document.createElement("div")
           caseBoard.classList.add(`caseboard`)
           caseBoard.classList.add(`c-board-${index}`)
           this.Board.appendChild(caseBoard)
        }

    }

    unload()
    {
        // Removes game components from html
        this.container.removeChild(this.Board)
        this.container.removeChild(this.currentPlayer)
        document.body.removeChild(this.gameController)
    }

    whoPlays()
    {
        this.currentPlayer = document.createElement("span")
        this.currentPlayer.id = "current-player"
        this.currentPlayer.textContent = ""
        this.container.appendChild(this.currentPlayer)
        // return this.currentPlayer
    }

    gameBtns()
    {
        this.gameController = document.createElement("div")
        this.gameController.id = "game-controller"
        this.gameController.innerHTML = `<button id="restart-btn" class="game-btn">Restart</button>
        <button id="stop-btn" class="game-btn">Stop</button>`
        document.body.appendChild(this.gameController)
    }

    startGameBtn()
    {
        this.startBtn = document.createElement("button")
        this.startBtn.id = "start-btn"
        this.startBtn.classList.add("game-btn")
        this.startBtn.textContent = "Start Game"
        this.container.appendChild(this.startBtn)
    }

    removeStartBtn()
    {
        this.container.removeChild(this.startBtn)
    }

    updatePlayTour(playerInTour)
    {
        // This basically updates the current player name (in the span)

        if (playerInTour === "player_1"){
        this.currentPlayer.textContent = "Player 1"
        }
        else if (playerInTour === "player_2"){
            this.currentPlayer.textContent = "Player 2"
        }
    }

    winnerIs(winner)
    {
        this.winbox = document.createElement("div")
        this.winbox.id = "winner-box"

        this.winpop = document.createElement("div")
        this.winpop.id = "winpop"
       
        this.winpopText = document.createElement("p")
        this.winpopText.id = "winpop-text"
        this.winpopText.innerHTML = `Winner: <span class="winner-name">${(winner === "player_1")?"Player 1":"Player 2"}</span>`
    
        this.winpopBtn = document.createElement("button")
        this.winpopBtn.id = "winpop-btn"
        this.winpopBtn.classList.add("game-btn")
        this.winpopBtn.textContent = "Close"

        this.winpop.appendChild(this.winpopText)
        this.winpop.appendChild(this.winpopBtn)
        this.winbox.appendChild(this.winpop)
        document.body.prepend(this.winbox)

        if (document.body.contains(this.winbox)) {
            this.container.classList.add("is-blured-due-to-popup")
            this.gameController.classList.add("is-blured-due-to-popup")
        }
    }

    removeWinIs()
    {
        document.body.removeChild(this.winbox)
        this.container.classList.remove("is-blured-due-to-popup")
        this.gameController.classList.remove("is-blured-due-to-popup")
    }

    cross(crossOrigin, playerid="player_1")
    {
        this.crossOrigin = crossOrigin

        if (playerid === "player_1")
        {
            let cross = document.createElement("div")
            cross.classList.add("cross-mark")
            this.cross_x1 = document.createElement("span")
            this.cross_x1.classList.add("x-cross")
            this.cross_x1.classList.add("x-cross-1")
            this.cross_x2 = document.createElement("span")
            this.cross_x2.classList.add("x-cross")
            this.cross_x2.classList.add("x-cross-2")

            cross.appendChild(this.cross_x1)
            cross.appendChild(this.cross_x2)
            crossOrigin.appendChild(cross)
        }

        else if(playerid === "player_2")
        {
            let circle = document.createElement("div")
            circle.classList.add("cricle-mark")
            this.m_circle = document.createElement("span")
            this.m_circle.classList.add("m-circle")
            circle.appendChild(this.m_circle)
            crossOrigin.appendChild(circle)
        }
        crossOrigin.classList.add("checked")
    }

    load()
    {
        this.whoPlays()
        this.container.appendChild(this.Board)
        this.gameBtns()
    }
}

export {TicTacToe}