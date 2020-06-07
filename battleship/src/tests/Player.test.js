import Player from '../factories/Player';

test('simulate a player turn', () => {
  const mockGame = Player();
  mockGame.playerHit('F5');
  expect(mockGame.Computer.Ships[0].getHitPositions().includes('F5')).toBe(true);
});

test('simulate a player miss an attack', () => {
  const mockGame = Player();
  mockGame.playerHit('NA');
  expect(mockGame.Computer.missedPositions.includes('NA')).toBe(true);
});

test.skip('Computer random hit', () => {
  const mockGame = Player();
  mockGame.computerPlay = true;
  mockGame.playerHit('R4');
  expect(mockGame.Player1.Ships[0].getHitPositions().includes('F5')).toBe(true);

});
