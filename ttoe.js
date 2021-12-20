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

    whoPlays()
    {
        this.currentPlayer = document.createElement("span")
        this.currentPlayer.id = "current-player"
        this.currentPlayer.textContent = "player_x"
        this.container.appendChild(this.currentPlayer)
        // return this.currentPlayer
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
    }
}

export {TicTacToe}