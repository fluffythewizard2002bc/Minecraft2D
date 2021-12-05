import { state, gameBoard } from "./constants.js";
import { clickedStart } from "./app.js";


const toolPick = document.querySelector('.pick');
toolPick.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('pick');
    let toolPicks = document.getElementsByTagName("body")[0];
    toolPicks.style.cursor = "url(assets/pics/pick.ani), auto";

});
const toolAxe = document.querySelector('.axe');
toolAxe.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('axe');

    let toolAxes = document.getElementsByTagName("body")[0];
    toolAxes.style.cursor = "url(assets/pics/axe.ani), auto";
});
const toolShovel = document.querySelector('.shovel');
toolShovel.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('shovel');
    let toolShovels = document.getElementsByTagName("body")[0];
    toolShovels.style.cursor = "url(assets/pics/shovel.ani), auto";
});

const toolSword = document.querySelector('.sword');
toolSword.addEventListener("click", (e) => {

    state[2].tools.active.pop();
    state[2].tools.active.push('sword');
    let toolSwords = document.getElementsByTagName("body")[0];
    toolSwords.style.cursor = "url(assets/pics/sword.ani), auto";
});

gameBoard.addEventListener("click", (e) => {
    let sq = e.target.closest("div");

    let tooli = state[2].tools.active[0];

    if (tooli != undefined) {
        const arr = state[2].tools[tooli]; // array of elements valid to scAm
        if (arr.includes(sq.classList[0])) {

            validToCut(sq);
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