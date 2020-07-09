import Player from './factories/Player';
import { Ship } from './factories/Ship';

const PlayerGrid = document.getElementById('player');
const ComputerGrid = document.getElementById('computer');
const ships = Array.from(document.getElementsByClassName('ship'));
const addedShips = [];

let chosenShip;
let Game = Player();
let shipLimit = 4;
let shipLength = 4;

function addDOMShips() {
  PlayerGrid.innerHTML = '';
  ComputerGrid.innerHTML = '';
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
}

addDOMShips();

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
    div.classList.remove('hitShip', 'hitEmpty', 'containShip');
  });
  Array.from(ComputerGrid.childNodes).forEach(div => {
    div.classList.remove('hitShip', 'hitEmpty', 'containShip');
  });
  shipLimit = 4;
  shipLength = 4;
}

function updateShips() {
  const playerSunkShips = Array.from(Game.Computer.Ships).filter(
    ship => ship.sink() === true
  );
  const compSunkShips = Array.from(Game.Player1.Ships).filter(
    ship => ship.sink() === true
  );

  if (playerSunkShips.length === 4) {
    alert('you win!');
    reset();
  } else if (compSunkShips.length === 4) {
    alert('you lose!');
    reset();
  }
}

function playerTurn(cords) {
  Game.playerHit(cords.id);
  updateSquares(cords);
  updateShips();
}

const squares = document.querySelectorAll('#computer');

// remember that the eventlistner is needed to be added to the parent, becuase when they are created dynmiacally, its not added
const eventHandle = () => {
  squares[0].addEventListener('click', e => {
    playerTurn(e.target);
  });
};

function addShip(e) {
  addedShips.push(e.target.id);
  PlayerGrid.classList.toggle('active');
  e.preventDefault();
  const splitCord = e.target.id.split('');
  const letter = splitCord[0];
  const number = Number(splitCord[1]);
  const cordsArray = [];
  const length = Number(chosenShip.dataset.length);
  for (let i = number; i < number + length; i++) {
    const cord = String(letter + i);
    cordsArray.push(cord);
    Game.Player1.Ships.push(Ship(cordsArray));
  }
  Game.Player1.placeShips();
  chosenShip.style.position = 'absolute';
  chosenShip.style.left = `${e.clientX - 10}px`;
  chosenShip.style.top = `${e.y - 30}px `;
  chosenShip.setAttribute('draggable', false);

  shipLimit -= 1;
  shipLength -= 1;

  const randomNum = Math.floor(Math.random() * 10) + 1;
  const randomchar = Math.floor(Math.random() * 10) + 65;
  const randomLetter = String.fromCharCode(randomchar);

  const shipCords = [];

  for (let i = 0; i <= shipLength; i++) {
    shipCords.push(randomLetter + (randomNum + i));
  }
  Game.Computer.Ships.push(Ship(shipCords));
  Game.Computer.placeShips();
  addDOMShips();

  if (shipLimit === 0) {
    addDOMShips();
    eventHandle();
  }
}

PlayerGrid.addEventListener('dragenter', () => {
  PlayerGrid.classList.toggle('active');
});

PlayerGrid.addEventListener('dragexit', () => {
  PlayerGrid.classList.toggle('active');
});

ships.forEach(ship => {
  ship.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
    const id = e.dataTransfer.getData('text');
    chosenShip = document.getElementById(id);
    if (addedShips.includes(id)) {
      e.preventDefault();
    } else {
      addedShips.push(id);
    }
  });
});

ships.forEach(ship => {
  ship.addEventListener('dragend', e => {
    e.preventDefault();
  });
});

PlayerGrid.addEventListener('dragover', e => {
  e.preventDefault();
});

PlayerGrid.addEventListener('drop', addShip);
