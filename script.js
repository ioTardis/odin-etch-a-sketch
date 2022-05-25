let sizeValue = 16;
let cell;

const gridContainer = document.querySelector('#grid');

function makeCell(cellNum) {
    for (let i = 0; i < cellNum; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
}

function makeGrid(sizeValue) {
    gridContainer.style.setProperty('--numRows', sizeValue);
    gridContainer.style.setProperty('--numCols', sizeValue);
    for (let i = 0; i < sizeValue; i++) {
        makeCell(sizeValue);
    }
}

makeGrid(sizeValue);