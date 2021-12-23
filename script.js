import {navbar} from "./build.js"
import {TicTacToe} from  "./ttoe.js"


// List of navbar Options
var opDic = {
    "Rules" : "#",
    "About Me" : "#",
    "Tips" : "#"
}
// Invoking mavbar
const nbar = new navbar
nbar.autoBar(opDic)


function init__Game()
{
    // Invoking board
    let ticBoard = new TicTacToe
    ticBoard.load()


    // Choose random player
    let firstPlayer = ["player_1", "player_2"][Math.floor(Math.random() * 2)]
    ticBoard.updatePlayTour(firstPlayer)

    let playerArray = [firstPlayer]

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
        })
    })

    let restartBtn = document.getElementById("restart-btn")
    let stopBtn = document.getElementById("stop-btn")
    
    let exiter = true // If this variable is false, then the function breaks 

    restartBtn.addEventListener("click", () => {
        // Find a way to restart
    })

    stopBtn.addEventListener("click", () => {
        // Find a way to delete the object or cancel the function
        exiter = false
        console.log(exiter)
        console.log(typeof exiter)
    })
    console.log("New value: ", exiter)
    
    if (exiter == false){console.log("Exit condition is false"); return }
    

    //End Of main Function
}

init__Game()