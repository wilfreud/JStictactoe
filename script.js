import {navbar} from "./build.js"
import {TicTacToe} from  "./ttoe.js"

// Ls of mavbar Options
var opList = ["Rules", "About me", "Tips"]
// Invoking mavbar
const nbar = new navbar
nbar.loadOptions(opList)
nbar.autoBar(opList)

// Invoking board
const ticBoard = new TicTacToe
ticBoard.load()

// Adding click event listener on board places
const bardCells = document.querySelectorAll(".caseboard")
// bardCells.forEach(cell => {
//     cell.addEventListener("click", () => {
//         console.log(`Clicked on cell ${cell.classList[1]}`)

//         ticBoard.cross(cell)
//     })
// })

for (let index = 0; index < bardCells.length; index++) {
    let cell = bardCells[index]

    cell.addEventListener("click", () => {
        console.log(`Clicked on cell ${cell.classList[1]}`)
        ticBoard.cross(cell)
    })
}