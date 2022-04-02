import {Navbar} from "./build.js"
import {TicTacToe} from  "./ttoe.js"


// List of navbar Options
var opDic = {
    "Rules" : "#",
    "About Me" : "#",
    "Tips" : "#"
}
// Invoking mavbar
const nbar = new Navbar
nbar.autoBar(opDic)


function init__Game()
{
    // Invoking board
    let ticBoard = new TicTacToe
    ticBoard.load()


    // Choose random player
    let firstPlayer = ["player_1", "player_2"][Math.floor(Math.random() * 2)]
    ticBoard.updatePlayTour(firstPlayer)

    let playerArray = []

    // Adding click event listener on caseboards
    let bardCells = document.querySelectorAll(".caseboard")
    bardCells.forEach(cell => {
        cell.addEventListener("click", () => {
            if(cell.classList.contains("checked")) {return}
            else
            {
                cell.classList.add("checked")
                if (playerArray[playerArray.length -1] === "player_1") {
                    playerArray.push("player_2")
                    ticBoard.cross(cell, "player_1")
                    ticBoard.updatePlayTour(playerArray[playerArray.length-1])
                }

                else {
                    playerArray.push("player_1")
                    ticBoard.cross(cell, "player_2")
                    ticBoard.updatePlayTour(playerArray[playerArray.length-1])
                }
            } 

            console.log(playerArray.length)
    if (playerArray.length === 9){
        ticBoard.winnerIs(playerArray[playerArray.length - 2])
        ticBoard.winbox.addEventListener("click", (event) => {
            event.stopPropagation()
            ticBoard.removeWinIs()
        })
    }

        })
        
    })

    let restartBtn = document.getElementById("restart-btn")
    let stopBtn = document.getElementById("stop-btn")
    
    let exiter = false // If this variable is false, then the function breaks 

    restartBtn.addEventListener("click", () => {
        ticBoard.unload()
        console.log("Successfully deleted elemets")
        init__Game()
        console.log("successfully restarted...");
    })

    stopBtn.addEventListener("click", () => {
        ticBoard.unload()
        exiter = true
        console.log("Successfully ended game"),
        ticBoard.startGameBtn()

        let startAfterStopBtn = ticBoard.startBtn
        startAfterStopBtn.addEventListener("click", () => {
            ticBoard.removeStartBtn()
            init__Game()
            console.log("successfully started a new game")
        })   
    })

    
    console.log(exiter)

    /* Link this event listener and the exit condition with a promise */
    if (exiter == true){console.log("Exit condition is false"); return }
    

    //End Of main Function
}

init__Game()