import { getControlDirections } from "./control.js";

export const Snake_Speed = 1;
const snakeBody = [{ x: 11, y: 12 }]

export function Update(params) {

    const controlDirection = getControlDirections();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    };

    snakeBody[0].x += controlDirection.x;
    snakeBody[0].y += controlDirection.y;
};

export function Draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
};