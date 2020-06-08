import Gameboard from './Gameboard';

const ComputerHits = [];

const Player = () => {
  const Player1 = Gameboard();

  const Computer = Gameboard();

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
