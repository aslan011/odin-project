import { Ship } from './Ship';

const Gameboard = () => {
  let index = 1;
  const grid = [];
  const Ships = [
    Ship('3', ['F5', 'F6', 'F7']),
    Ship('4', ['J7', 'J8', 'J9', 'J10']),
    Ship('4', ['J7', 'J8', 'J9', 'J10']),
    Ship('4', ['J7', 'J8', 'J9', 'J10']),
    Ship('4', ['C1', 'C2', 'C3'])
  ];

  const missedPositions = [];

  for (let i = 65; i < 75; i++) {
    const char = String.fromCharCode(i);
    for (let t = 1; t < 11; t++) {
      const gridSquare = {
        index,
        cords: char + String(t),
        containShip: false,
        hit: false
      };
      index++;
      grid.push(gridSquare);
    }
  }

  const getAllShipPositons = () => {
    const allShipPositons = [];
    Ships.forEach(ship => {
      ship.getPositions().forEach(position => {
        allShipPositons.push(position);
      });
    });
    return allShipPositons;
  };

  const placeShips = () => {
    const allShipPositions = getAllShipPositons();

    grid.forEach(square => {
      const { cords } = square;
      if (allShipPositions.includes(cords)) {
        // eslint-disable-next-line no-param-reassign
        square.containShip = true;
      }
    });
  };

  placeShips();

  const receiveAttack = cords => {
    for (let i = 0; i < Ships.length; i++) {
      if (Ships[i].getPositions().includes(cords) === true) {
        Ships[i].hit(cords);
        break;
      }
      if (i + 1 === Ships.length) {
        missedPositions.push(cords);
      }
    }
  };
  return { grid, Ships, missedPositions, receiveAttack, placeShips };
};

export default Gameboard;
