import Gameboard from '../factories/Gameboard';

test('check squares populate', () => {
  const mockGameBoard = Gameboard();
  expect(mockGameBoard.grid.length).toBe(100);
});

test('random grid squiare cordinates', () => {
  const mockGameBoard = Gameboard();
  expect(mockGameBoard.grid[9].cords).toBe('A10');
});

test('if a ship can recieve an attack', () => {
  const mockGameBoard = Gameboard();
  mockGameBoard.receiveAttack('C1');
  expect(mockGameBoard.Ships[4].getHitPositions().includes('C1')).toBe(true);
});

test('correct action when a ship misses', () => {
  const mockGameBoard = Gameboard();
  mockGameBoard.receiveAttack('Z10');
  expect(mockGameBoard.missedPositions.includes('Z10')).toBe(true);
});

test('ships can sink when no positions left', () => {
  const mockGameBoard = Gameboard();
  mockGameBoard.receiveAttack('C1');
  mockGameBoard.receiveAttack('C2');
  mockGameBoard.receiveAttack('C3');
  expect(mockGameBoard.Ships[4].sink()).toBe(true);
});
