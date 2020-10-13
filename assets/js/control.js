let controlDirection = { x: 0, y: 0 };
let lastControlDirection = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if(lastControlDirection.y !== 0) break;
            controlDirection = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            if(lastControlDirection.y !== 0) break;
            controlDirection = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if(lastControlDirection.x !== 0) break;
            controlDirection = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if(lastControlDirection.x !== 0) break;
            controlDirection = { x: 1, y: 0 }
            break;
    }
})

export function getControlDirections(params) {
    lastControlDirection = controlDirection;
    return controlDirection;
}