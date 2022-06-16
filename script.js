const mainContainer = document.querySelector('#main-container');

function initialiseFirstGrid() {
    generateGrid(16);
    attachEventHandlers();
}

function generateGrid(size) {
    for (let row = 1; row <= size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRowContainer');
        gridRow.classList.add(("row" + row));
        mainContainer.append(gridRow);
        for (let col = 1; col <= size; col++) {
            const div = document.createElement('div');
            div.classList.add('tile');
            //col > 1 ? div.textContent = col : div.textContent = (`Row:${row} ${col}`);
            gridRow.append(div);
        }
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