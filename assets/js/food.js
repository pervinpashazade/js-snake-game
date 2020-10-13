import {onSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = randomFoodPosition();
const Expansion_Rate = 1;

export function Update(params) {
    if (onSnake(food)) {
        expandSnake(Expansion_Rate);
        food = randomFoodPosition();
    }
};

export function Draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
};

export function randomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    
    return newFoodPosition;
}