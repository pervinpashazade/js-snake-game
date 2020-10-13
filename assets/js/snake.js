import { getControlDirections } from "./control.js";

export const Snake_Speed = 7;
const snakeBody = [{ x: 11, y: 12 }]
let newSegments = 0;

export function Update(params) {
    addSegments();

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

export function expandSnake(amount) {
    newSegments += amount;
};

export function onSnake(position, { ignorHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignorHead && index == 0) return false;
        return equalPositions(segment, position);
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function eatSnakeBody() {
    return onSnake(snakeBody[0], { ignorHead: true });
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments(params) {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    newSegments = 0;
}