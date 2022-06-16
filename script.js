const mainContainer = document.querySelector('#main-container');
for (let row = 1; row <= 16; row++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    gridRow.classList.add(("row" + row));
    mainContainer.append(gridRow);
    for (let col = 1; col <= 16; col++) {
        const div = document.createElement('div');
        div.classList.add('tile');
        div.textContent = col;
        gridRow.append(div);
    }
}