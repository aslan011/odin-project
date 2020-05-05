const container = document.querySelector('#container');

const GameBoard = {
  grid: ['', '', '', '', '', '', '', '', ''],
  turn: 'X',
};

function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

function render() {
  function removeAllChildNodes(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  removeAllChildNodes(container);
  let i = 0;
  GameBoard.grid.forEach((square) => {
    const div = document.createElement('div');
    div.className = 'symbols';
    div.id = i;
    div.textContent = square;
    container.appendChild(div);
    i++;
  });
}

function Game(event) {
  if (GameBoard.grid[event.id] == '') {
    GameBoard.grid[event.id] = GameBoard.turn;
    event.textContent = GameBoard.turn;
  }
  if (GameBoard.turn == 'X') {
    GameBoard.turn = 'O';
  } else { GameBoard.turn = 'X'; }
  // checking X rows
  if (GameBoard.grid[0] == 'X' && GameBoard.grid[1] == 'X' && GameBoard.grid[2] == 'X') { alert('Win'); } else if (GameBoard.grid[3] == 'X' && GameBoard.grid[4] == 'X' && GameBoard.grid[5] == 'X') { alert('Win'); } else if (GameBoard.grid[6] == 'X' && GameBoard.grid[7] == 'X' && GameBoard.grid[8] == 'X') { alert('Win'); }
  // checking X columns
  else if (GameBoard.grid[0] == 'X' && GameBoard.grid[3] == 'X' && GameBoard.grid[6] == 'X') { alert('Win'); } else if (GameBoard.grid[1] == 'X' && GameBoard.grid[4] == 'X' && GameBoard.grid[7] == 'X') { alert('Win'); } else if (GameBoard.grid[2] == 'X' && GameBoard.grid[5] == 'X' && GameBoard.grid[8] == 'X') { alert('Win'); }
  // checking O rows
  if (GameBoard.grid[0] == 'O' && GameBoard.grid[1] == 'O' && GameBoard.grid[2] == 'O') { alert('O Win'); } else if (GameBoard.grid[3] == 'O' && GameBoard.grid[4] == 'O' && GameBoard.grid[5] == 'O') { alert('O Win'); } else if (GameBoard.grid[6] == 'O' && GameBoard.grid[7] == 'O' && GameBoard.grid[8] == 'O') { alert('O Win'); }
  // checking O columns
  else if (GameBoard.grid[0] == 'O' && GameBoard.grid[3] == 'O' && GameBoard.grid[6] == 'O') { alert('O Win'); } else if (GameBoard.grid[1] == 'O' && GameBoard.grid[4] == 'O' && GameBoard.grid[7] == 'O') { alert('O Win'); } else if (GameBoard.grid[2] == 'O' && GameBoard.grid[5] == 'O' && GameBoard.grid[8] == 'O') { alert('O Win'); }
  // checking diag
  else if (GameBoard.grid[0] == 'X' && GameBoard.grid[4] == 'X' && GameBoard.grid[8] == 'X') { alert(' Win'); } else if (GameBoard.grid[0] == 'O' && GameBoard.grid[4] == 'O' && GameBoard.grid[8] == 'O') { alert('O Win'); } else if (GameBoard.grid[2] == 'X' && GameBoard.grid[4] == 'X' && GameBoard.grid[6] == 'X') { alert(' Win'); } else if (GameBoard.grid[2] == 'O' && GameBoard.grid[4] == 'O' && GameBoard.grid[6] == 'O') { alert('O Win'); } else if (!GameBoard.grid.includes('')) { alert('Draw!'); }
}

const playerOne = new Player('Sam', 'X');
const playerTwo = new Player('Billy', 'O');
render();

document.querySelectorAll('.symbols').forEach((symbol) => {
  symbol.addEventListener('click', (event) => {
    Game(event.target);
  });
});
