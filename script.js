import {navbar} from "./build.js"
import {TicTacToe} from  "./ttoe.js"

// List of navbar Options
var opList = ["Rules", "About me", "Tips"]
var opDic = {
    "Rules" : "#",
    "About Me" : "#",
    "Tips" : "#"
}

// Invoking mavbar
const nbar = new navbar
// nbar.loadOptions()
nbar.autoBar(opDic)


// Invoking board
const ticBoard = new TicTacToe
ticBoard.load()


// Choose random player
var firstPlayer = ["player_1", "player_2"][Math.floor(Math.random() * 2)]


// Adding click event listener on board places
const bardCells = document.querySelectorAll(".caseboard")
bardCells.forEach(cell => {
    cell.addEventListener("click", () => {
        
        ticBoard.cross(cell, firstPlayer) 
    })
})