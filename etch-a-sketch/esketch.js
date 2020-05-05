
const container = document.querySelector('#container');


function defaultGrid(tiles) {
  for (let i = 0; i < tiles * tiles; i++) {
    const div = document.createElement('div');
    div.className = 'squares';
    container.appendChild(div);
  }
  const squ = Array.from(document.querySelectorAll('.squares'));
  squ.forEach((squ) => squ.addEventListener('mouseover', mouseover));
}

function removeGrid() {
  document.querySelectorAll('.squares').forEach((element) => element.remove());
}

function mouseover(e) {
  this.style.backgroundColor = randomColor();
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function reset() {
  const squ = Array.from(document.querySelectorAll('.squares'));
  squ.forEach((squ) => squ.style.backgroundColor = 'white');
}


function promptTiles() {
  removeGrid();
  const tiles = prompt('Enter number of tiles for grid');
  container.style.gridTemplateRows = `repeat(${tiles},1fr)`;
  container.style.gridTemplateColumns = `repeat(${tiles},1fr)`;
  defaultGrid(tiles);
}

defaultGrid(16);
