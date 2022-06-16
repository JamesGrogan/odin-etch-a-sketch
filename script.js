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
        tiles[i].classList.add('hovered')
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

resetButton = document.querySelector('#reset-button');
console.log(resetButton);
resetButton.addEventListener('click', () => {
    const size = prompt('Please enter the size of the new grid');
    destroyGrid();
    generateGrid(size);
    attachEventHandlers();
})