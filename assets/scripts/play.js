import { state, gameBoard } from "./constants.js";
import { clickedStart } from "./app.js";



const toolPick = document.querySelector('.pick');
toolPick.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('pick');
    let toolPicks = document.getElementsByTagName("body")[0];
    toolPicks.style.cursor = "url('../pics/pick.ani'), 0 0 pointer";
    "../pics/axe.ani"
});
const toolAxe = document.querySelector('.axe');
toolAxe.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('axe');

    //document.body.style.cursor = import shovel.ini from "../pics";
    //document.body.style.cursor = url('..pics/axe.ini'), auto;
    let toolAxes = document.getElementsByTagName("body")[0];
    toolAxes.style.cursor = "url('../pics/axe.ani'), 0 0 pointer";
});
const toolShovel = document.querySelector('.shovel');
toolShovel.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('shovel');
    let toolShovels = document.getElementsByTagName("body")[0];
    toolShovels.style.cursor = "url('../pics/shovel.ani'), 0 0 pointer";
});

const toolSword = document.querySelector('.sword');
toolSword.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('sword');
    let toolSwords = document.getElementsByTagName("body")[0];
    toolSwords.style.cursor = "url('../pics/sword.ani'), 0 0 pointer";

});

gameBoard.addEventListener("click", (e) => {
    let sq = e.target.closest("div");
    console.log(sq);
    console.log(sq.classList[0]); //element

    let tooli = state[2].tools.active[0];
    console.log(state[2].tools.active[0]); //active tool
    if (tooli != undefined) {
        const arr = state[2].tools[tooli]; // array of elements valid to scAm
        if (arr.includes(sq.classList[0])) {
            console.log("valid to cut");
            validToCut(sq);
        } else {
            console.log("gtfo");
        }
    }
});

function validToCut(sq) {
    let piece = sq.classList[0]
    sq.classList.remove(piece);
    sq.classList.add("sky");
    saveToInventory(piece);
}

function saveToInventory(elm) {
    state[3].inventory[elm]++;
    console.log(state[3].inventory);
}

const resetG = document.querySelector('.reset');
resetG.addEventListener("click", (e) => {
    toolAxe.removeEventListener('click', (e));
    toolPick.removeEventListener('click', (e));
    toolShovel.removeEventListener('click', (e));

    resetG.removeEventListener('click', (e));
    resetState();
});

function resetState() {

    while (state[2].tools.active.length) {
        state[2].tools.active.pop();
    }
    Object.entries(state[3].inventory).forEach(([key, value]) => {

        while (state[3].inventory[key] > 0) {
            state[3].inventory[key]--;
        }
    });
    while (gameBoard.firstChild) {
        gameBoard.firstChild.remove();
    }
    return clickedStart(); //restart
};