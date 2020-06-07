import Gameboard from '../factories/Gameboard';
import Player from '../factories/Player';

test('check squares populate', () => {
  const mockGameBoard = Gameboard();
  expect(mockGameBoard.grid.length).toBe(100);
});

test('random grid squiare cordinates', () => {
  const mockGameBoard = Gameboard();
  expect(mockGameBoard.grid[9].cords).toBe('A10');
});

test('if a ship can recieve an attack', () => {
  const mockGameBoard = Player();
  mockGameBoard.playerHit('F5');
  expect(mockGameBoard.Computer.Ships[0].getHitPositions().includes('F5')).toBe(true);
});

test('correct action when a ship misses', () => {
  const mockGameBoard = Player();
  mockGameBoard.playerHit('Z10');
  expect(mockGameBoard.Computer.missedPositions.includes('Z10')).toBe(true);
});

test('ships can sink when no positions left', () => {
  const mockGameBoard = Player();
  mockGameBoard.playerHit('F5');
  mockGameBoard.playerHit('F6');
  mockGameBoard.playerHit('F7');
  expect(mockGameBoard.Computer.Ships[0].sink()).toBe(true);
});
