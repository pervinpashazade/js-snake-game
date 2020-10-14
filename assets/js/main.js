import { Update as updateSnake, Draw as drawSnake, Snake_Speed, getSnakeHead, eatSnakeBody, score } from "./snake.js";
import { Update as updateFood, Draw as drawFood } from "./food.js";
import { crashOutsideBox } from './grid.js';
import { checkCookie, cookieName, setCookie } from './memory.js';

let gameOver = false;
let lastRenderedTime = 0;
const gameBoard = document.getElementById('game-board');
let hightScoreText = document.getElementById('hight-score-text');




function main(currentTime) {
    if(gameOver){
        setHighScor()

        if(confirm("Game Over! Your scrore: " + score + " \n Press Ok button for Restart")){
            
            // window.location = "/";
        }
        return;
    }


    window.webkitRequestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderedTime) / 1000

    if (secondsSinceLastRender < 1 / Snake_Speed) {
        return
    }

    lastRenderedTime = currentTime;

    // getHightScore()
    Update();
    Draw();
    CheckLose();
}

window.requestAnimationFrame(main)

setHighScor()

function setHighScor(){
    let value = checkCookie(cookieName);

    if(value != null && value > score){
        hightScoreText.innerHTML= value;
        setCookie(value);
    }

    if(value == null || score > value){
        setCookie(score);
    }
}

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
    // setHighScor()
}
