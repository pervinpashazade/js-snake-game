import { Update as updateSnake, Draw as drawSnake, Snake_Speed, getSnakeHead, eatSnakeBody, score } from "./snake.js";
import { Update as updateFood, Draw as drawFood } from "./food.js";
import { crashOutsideBox } from './grid.js';

let gameOver = false;
let lastRenderedTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if(gameOver){
        if(confirm("Game Over! Your scrore: " + score + " \n Press Ok button for Restart")){
            window.location = "/";
        }
        return;
    }

    window.webkitRequestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderedTime) / 1000

    if (secondsSinceLastRender < 1 / Snake_Speed) {
        return
    }

    lastRenderedTime = currentTime;

    Update();
    Draw();
    CheckLose();
}

window.requestAnimationFrame(main)

function Update(params) {
    gameBoard.innerHTML = '';
    updateSnake();
    updateFood();
}

function Draw() {
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function CheckLose(){
    gameOver = crashOutsideBox(getSnakeHead()) || eatSnakeBody();
}