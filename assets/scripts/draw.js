import { state, gameBoard, matrix } from "./constants.js";



function elemntsChoose(square, matValue) {

    let i = square.dataset.i;
    switch (matValue) {
        case state[1].mapClasses.sky:
            return square.classList.add("sky");

        case state[1].mapClasses.cloud:
            return square.classList.add("cloud");

        case state[1].mapClasses.groundGrass:
            if (i < state[0].limits.groundLimit) {
                return square.classList.add("groundGrass");
            }
        case state[1].mapClasses.ground:
            return square.classList.add("ground");


        case state[1].mapClasses.green:
            return square.classList.add("green");

        case state[1].mapClasses.stone:
            return square.classList.add("stone");

        case state[1].mapClasses.wood:
            return square.classList.add("wood");
    }
}

export function draw() {
    let copyMatrix = [];
    copyMatrix = [...matrix];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {

            let square = document.createElement('div');
            square.dataset.id = [i, j];

            elemntsChoose(square, copyMatrix[i][j]);
            gameBoard.appendChild(square);

        }
    }
}