import { Update as updateSnake, Draw as drawSnake, Snake_Speed} from "./snake.js"

let lastRenderedTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    window.webkitRequestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderedTime ) / 1000

    if (secondsSinceLastRender < 1 / Snake_Speed) {
        return
    }

    lastRenderedTime = currentTime;

    Update();
    Draw();
}

window.requestAnimationFrame(main)

function Update(params) {
    gameBoard.innerHTML = '';
    updateSnake()
}

function Draw() {
    drawSnake(gameBoard)
}