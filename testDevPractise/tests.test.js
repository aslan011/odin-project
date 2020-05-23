import { reverseString, cap, calc, cipher } from './functions';

test('capitalizes a word', () => {
  expect(cap('hello')).toMatch('Hello');
});

test('Check it reverses a string', () => {
  expect(reverseString('billy')).toBe('yllib');
});

test('check calculations', () => {
  expect(calc(3, 3, '*')).toBe(9);
  expect(calc(40, 2, '/')).toBe(20);
  expect(calc(80, 3, '+')).toBe(83);
  expect(calc(60, 30, '-')).toBe(30);
});

test('tests wrapping', () => {
  expect(cipher('zzZZ', 3)).toBe('ccCC');
});

test('keep the same case', () => {
  expect(cipher('AaBbCc', 2)).toBe('CcDdEe');
});
