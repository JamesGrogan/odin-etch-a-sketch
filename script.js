const mainContainer = document.querySelector('#main-container');

function initialiseFirstGrid() {
    generateGrid(16);
    attachEventHandlers();
}

function generateGrid(size) {
    for (let row = 1; row <= size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRowContainer');
        //gridRowContainer.height = 1/size%
        gridRow.classList.add(("row" + row));
        mainContainer.append(gridRow);
        for (let col = 1; col <= size; col++) {
            const div = document.createElement('div');
            div.classList.add('tile');
            //tile.gridRowContainer.width = 1/size%
            //col > 1 ? div.textContent = col : div.textContent = (`Row:${row} ${col}`);
            gridRow.append(div);
        }
    }
    allGridRows = document.getElementsByClassName('gridRowContainer');
    for (let i = 0; i < allGridRows.length; i++) {
        allGridRows[i].style.height = (`${1 / size * 100}%`);
    }
    allTiles = document.getElementsByClassName('tile');
    for (let i = 0; i < allTiles.length; i++) {
        allTiles[i].style.width = (`${1 / size * 100}%`);
    }
}

function attachEventHandlers() {
    const tiles = document.querySelectorAll('.tile');
    for (let i = 0; i < tiles.length; i ++) {
        tiles[i].addEventListener('mouseover', () => {
        tiles[i].style.backgroundColor = `rgb(${generateRandomRGBValue()})`;
    });
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function destroyGrid() {
    removeAllChildNodes(mainContainer);
}

function promptNewSize() {
    let size;
    do {
        size = prompt('Please enter the size of the new grid (max 100 and must be a number)');
    } while (isNaN(size) || (size > 100))
    return size;
}

resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    const size = promptNewSize();
    destroyGrid();
    generateGrid(size);
    attachEventHandlers();
})

function generateRandomRGBValue() {
    const red = Math.floor(Math.random() * (255 + 1));
    const green = Math.floor(Math.random() * (255 + 1));
    const blue = Math.floor(Math.random() * (255 + 1));
    console.log(`${red},${green},${blue}`);
    return (`${red},${green},${blue}`);
}