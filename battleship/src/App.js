import Player from './factories/Player';
import { Ship } from './factories/Ship';

const PlayerGrid = document.getElementById('player');
const ComputerGrid = document.getElementById('computer');

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
  document.getElementById('formDiv').style.visibility = 'visible';
  shipLimit = 4;
  shipLength = 5;
  document.getElementById(
    'remainingShips'
  ).textContent = `Add some Ships! ${shipLimit} remaining`;
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

const squares = document.querySelectorAll('#computer');

// remember that the eventlistner is needed to be added to the parent, becuase when they are created dynmiacally, its not added
const eventHandle = () => {
  squares[0].addEventListener('click', e => {
    playerTurn(e.target);
  });
};

function addShip(e) {
  e.preventDefault();
  shipLimit -= 1;
  shipLength -= 1;

  document.getElementById(
    'remainingShips'
  ).textContent = `Add some Ships! ${shipLimit} remaining`;

  document.getElementById(
    'length'
  ).textContent = `This ship length is ${shipLength}`;
  // eslint-disable-next-line prefer-destructuring
  const form = e.srcElement.form;
  const cords = form[0].value;
  const cordsArray = cords.split(' ');
  Game.Player1.Ships.push(Ship(cordsArray));
  Game.Player1.placeShips();

  const randomNum = Math.floor(Math.random() * 10) + 1;
  const randomchar = Math.floor(Math.random() * 10) + 65;
  const randomLetter = String.fromCharCode(randomchar);

  const shipCords = [];

  for (let i = 0; i < shipLength; i++) {
    shipCords.push(randomLetter + (randomNum + i));
  }
  Game.Computer.Ships.push(Ship(shipCords));
  Game.Computer.placeShips();

  Array.from(document.getElementsByTagName('input')).forEach(tag => {
    tag.value = '';
  });

  if (shipLimit === 0) {
    addDOMShips();
    document.getElementById('formDiv').style.visibility = 'hidden';
    eventHandle();
  }
}

document.getElementById('submit').addEventListener('click', e => {
  addShip(e);
});
