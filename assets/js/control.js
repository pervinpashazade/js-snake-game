let controlDirection = { x: 0, y: 0 };
let lastControlDirection = { x: 0, y: 0 };

let shiftPressed = false;

window.addEventListener('keyup', e => {
    if (e.key == "Shift") {
        shiftPressed = false
        console.log(shiftPressed)

    }
});

window.addEventListener('keydown', e => {
    if (e.key == "Shift") {
        shiftPressed = true
        console.log(shiftPressed)
    }

    switch (e.key) {
        case 'ArrowUp':
            if (lastControlDirection.y !== 0) break;
            controlDirection = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            if (lastControlDirection.y !== 0) break;
            controlDirection = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if (lastControlDirection.x !== 0) break;
            controlDirection = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if (lastControlDirection.x !== 0) break;
            controlDirection = { x: 1, y: 0 }
            break;
    }
})

export function getControlDirections(params) {
    lastControlDirection = controlDirection;
    return controlDirection;
}

export function isActivatedShift(){
    return shiftPressed;
}