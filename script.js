let sizeValue = 16;
let cell;
let rainbowModeOn = false;

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
        if (rainbowModeOn === true) changeRainbowColor(target);
        else changeColor(target);
    }
})

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => { window.location.reload() });

const newGridBtn = document.querySelector('#newGrid');
newGridBtn.addEventListener('click', () => {
    sizeValue = prompt('Choose grid size up to 70', sizeValue);
    if (sizeValue >= 1 && sizeValue <= 70) {
        gridContainer.textContent = '';
        makeGrid(sizeValue);
    } else {
        do sizeValue = prompt('Choose grid size up to 70', sizeValue);
        while (sizeValue >= 1 && sizeValue <= 70);
        gridContainer.textContent = '';
        makeGrid(sizeValue);
    }
});

function changeRainbowColor(target) {
    target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', () => {
    rainbowModeOn = true;
});

const classicBtn = document.querySelector('#classic');
classicBtn.addEventListener('click', () => {
    rainbowModeOn = false;
})
makeGrid(sizeValue);