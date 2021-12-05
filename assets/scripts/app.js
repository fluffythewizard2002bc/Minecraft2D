import { draw } from "./draw.js";


const window1 = document.querySelector("#greet");
const window2 = document.querySelector("#container");
const startBtn = document.querySelector("#startGameBtn");

function main() {
    return draw();
}


startBtn.addEventListener("click", (e) => {
    clickedStart();
    startBtn.removeEventListener('click', (e));
});

export function clickedStart() {
    window1.style.display = "none";
    window2.style.display = "flex";
    main();

}