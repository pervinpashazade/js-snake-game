import { getControlDirections } from "./control.js";

export let Snake_Speed = 1;
let Last_Speed = 1;
export let score = 0;
let isPressedShift = false;
const Turbo_Power = 5;

let scoreText = document.getElementById('score-text');
let levelText = document.getElementById('level-text');
let speedText = document.getElementById('speed-text');

window.addEventListener('keyup', e => {
    if (e.key == "Shift") {
        speedText.innerHTML = Last_Speed;

        Snake_Speed = Last_Speed;
    }
});

function matchTurboSpeed(speed) {
    return speed + Turbo_Power;
}

window.addEventListener('keydown', e => {
    if (e.key == "Shift") {
        speedText.innerHTML = matchTurboSpeed(Last_Speed)

        while (Snake_Speed <= (Last_Speed + Turbo_Power)) {
            Snake_Speed += 3
        }
    }
});

const snakeBody = [{ x: 11, y: 12 }]
let newSegments = 0;



export function Update(params) {
    addSegments();

    switch (score) {
        case 2:
            Snake_Speed = 2;
            Last_Speed = 2;
            speedText.innerHTML = 2;
            break;
        case 5:
            Snake_Speed = 3;
            Last_Speed = 3;
            speedText.innerHTML = 3;
            break;
        case 10:
            Snake_Speed = 5;
            Last_Speed = 5;
            speedText.innerHTML = 5;
            break;
        case 15:
            Snake_Speed = 7;
            Last_Speed = 7;
            speedText.innerHTML = 7;

            break;
        case 17:
            Snake_Speed = 9;
            Last_Speed = 9;
            speedText.innerHTML = 9;
            // levelText.innerHTML = 'Medium';

            break;
        case 30:
            Snake_Speed = 10;
            Last_Speed = 10;
            speedText.innerHTML = 10;

            break;
        case 40:
            Snake_Speed = 12;
            Last_Speed = 12;
            speedText.innerHTML = 12;
            // levelText.innerHTML = 'Hard'

            break;
        case 55:
            Snake_Speed = 13;
            Last_Speed = 13;
            speedText.innerHTML = 13;
            // levelText.innerHTML = 'Expert'

            break;
    }

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
        score += 1;
        scoreText.innerHTML = score;

    }
    newSegments = 0;
}