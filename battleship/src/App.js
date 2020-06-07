import Player from './factories/Player';

const PlayerGrid = document.getElementById('player');
const ComputerGrid = document.getElementById('computer');

let Game = Player();

Game.Player1.grid.forEach(square => {
  const div = document.createElement('div');
  div.className = 'squares';
  div.id = square.cords;
  if (square.containShip === true) {
    div.classList.add('containShip');
  }
  PlayerGrid.appendChild(div);
});

Game.Computer.grid.forEach(square => {
  const div = document.createElement('div');
  div.className = 'COMsquares';
  div.id = square.cords;
  if (square.containShip === true) {
    div.classList.add('COMcontainShip');
  }
  ComputerGrid.appendChild(div);
});

function updateSquares(cords) {
  const comHit = Game.computerHit();
  Array.from(PlayerGrid.childNodes).forEach(square => {
    if (
      square.id === comHit &&
      Array.from(square.classList).includes('containShip')
    ) {
      square.classList.add('hitShip');
    } else if (square.id === comHit) {
      square.classList.add('hitEmpty');
    }

    if (Array.from(cords.classList).includes('COMcontainShip')) {
      cords.classList.add('hitShip');
    } else {
      cords.classList.add('hitEmpty');
    }
  });
}

function reset() {
  Game = Player();
  Array.from(PlayerGrid.childNodes).forEach(div => {
    div.classList.remove('hitShip', 'hitEmpty');
  });
  Array.from(ComputerGrid.childNodes).forEach(div => {
    div.classList.remove('hitShip', 'hitEmpty');
  });
}

function updateShips() {
  const playerSunkShips = Array.from(Game.Computer.Ships).filter(
    ship => ship.sink() === true
  );

  const compSunkShips = Array.from(Game.Player1.Ships).filter(
    ship => ship.sink() === true
  );

  if (playerSunkShips.length === 3) {
    alert('you win!');
    reset();
  } else if (compSunkShips.length === 3) {
    alert('you lose!');
    reset();
  }
}

function playerTurn(cords) {
  Game.playerHit(cords.id);
  updateSquares(cords);
  updateShips();
}

const squares = Array.from(document.querySelectorAll('.COMsquares'));
squares.forEach(square =>
  square.addEventListener('click', () => {
    playerTurn(square);
  })
);
