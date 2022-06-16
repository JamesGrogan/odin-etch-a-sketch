const mainContainer = document.querySelector('#main-container');
for (let row = 1; row <= 16; row++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRowContainer');
    gridRow.classList.add(("row" + row));
    mainContainer.append(gridRow);
    for (let col = 1; col <= 16; col++) {
        const div = document.createElement('div');
        div.classList.add('tile');
        //col > 1 ? div.textContent = col : div.textContent = (`Row:${row} ${col}`);
        gridRow.append(div);
    }
}

const tiles = document.querySelectorAll('.tile');

for (let i = 0; i < tiles.length; i ++) {
    tiles[i].addEventListener('mouseover', () => {
        tiles[i].classList.add('hovered')
    });
}

resetButton = document.querySelector('#reset-button');
console.log(resetButton);
resetButton.addEventListener('click', () => {
    response = prompt('Please enter the size of the new grid');
    console.log(response);
})