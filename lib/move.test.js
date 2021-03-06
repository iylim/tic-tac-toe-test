const readLineSync = require('readline-sync');
const { validateMove, getValidMoveFromPlayer } = require('./move');
const { displayError } = require('./ui');

describe('validateMove', () => {
  it('should make sure input is in proper format', () => {
    const input = '1, 0';
    const incorrect = '0, 1';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(validateMove(input, board)).toStrictEqual([1, 0]);
    try {
      expect(validateMove(incorrect, board));
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  it('should error if move is off the board', () => {
    const input = '1, 4';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    try {
      validateMove(input, board);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
  it.todo('should make sure input has 2 values');
  
  it('should error if space is already occupied', () => {
    const input = '0, 1';
    const board = [[' ', 'X', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    try {
      validateMove(input, board);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});

jest.mock('readline-sync');
describe('getValidMoveFromPlayer', () => {
  it('should ask players move and error if move is invalid', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect.assertions(2);
    try {
      const move = readLineSync.question.mockReturnValueOnce('1, 0');
      // expect(validateMove(move, board).toBe('1, 0');
      validateMove(move, board);
    } catch (err) {
      expect(getValidMoveFromPlayer).toBeInstanceOf(console.error);
      expect(getValidMoveFromPlayer).toEqual(getValidMoveFromPlayer(board));
    }
  });
});