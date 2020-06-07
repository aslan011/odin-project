import Gameboard from './Gameboard';
import { Ship } from './Ship';

const ComputerHits = [];

const Player = () => {
  const Player1 = Gameboard();
  Player1.Ships.push(Ship('3', ['F5', 'F6', 'F7']));
  Player1.Ships.push(Ship('4', ['J7', 'J8', 'J9', 'J10']));
  Player1.Ships.push(Ship('4', ['J7', 'J8', 'J9', 'J10']));
  Player1.Ships.push(Ship('4', ['J7', 'J8', 'J9', 'J10']));
  Player1.Ships.push(Ship('4', ['C1', 'C2', 'C3']));
  Player1.placeShips();

  const Computer = Gameboard();
  Computer.Ships.push(Ship('3', ['F5', 'F6', 'F7']));
  Computer.Ships.push(Ship('4', ['J7', 'J8', 'J9', 'J10']));
  Computer.Ships.push(Ship('4', ['J7', 'J8', 'J9', 'J10']));
  Computer.Ships.push(Ship('4', ['J7', 'J8', 'J9', 'J10']));
  Computer.Ships.push(Ship('4', ['C1', 'C2', 'C3']));
  Computer.placeShips();

  const computerHit = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    const randomchar = Math.floor(Math.random() * 10) + 65;
    const randomLetter = String.fromCharCode(randomchar);
    const randomHit = randomLetter + randomNum;

    if (ComputerHits.includes(randomHit) === false) {
      ComputerHits.push(randomHit);
      Player1.receiveAttack(randomHit);
    } else {
      computerHit();
    }
    return randomHit;
  };

  const playerHit = cords => {
    Computer.receiveAttack(cords);
  };
  return { Player1, Computer, playerHit, computerHit };
};

export default Player;
