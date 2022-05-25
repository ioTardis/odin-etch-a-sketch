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

function changeColor(target) {
    target.style.backgroundColor = 'black';
}

gridContainer.addEventListener('mouseover', function (e) {
    let target = e.target;
    if (target.matches('div.cell')) {
        changeColor(target);
    }
})

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {window.location.reload()});

makeGrid(sizeValue);