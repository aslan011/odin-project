import { Ship } from '../factories/Ship';

test('hit function works', () => {
  const mockship = Ship('4', ['1', '2', '3', '4']);
  expect(mockship.hit('4')).toBe(true);
});

test('checking hit function misses', () => {
  const mockship = Ship('4', ['1', '2', '3', '4']);
  expect(mockship.hit('5')).toBe(false);
});

test('checking if ship sinks', () => {
  const mockship = Ship('4', ['1', '2', '3', '4']);
  mockship.hit('1');
  mockship.hit('2');
  mockship.hit('3');
  mockship.hit('4');
  expect(mockship.sink()).toBe(true);
});
