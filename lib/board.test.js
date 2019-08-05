const { prettifyRow, prettifyBoard, generateStartingBoard, updateBoard } = require('./board');

describe('generateStartingBoard', () => {
  it('should create a n x n board', () => {
    expect(generateStartingBoard(3)).toStrictEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });

  it('should create an empty array if the input type is not a number', () => {
    expect(generateStartingBoard('2')).toHaveLength(1);
    expect(generateStartingBoard({})).toHaveLength(1);
    expect(generateStartingBoard(true)).toHaveLength(1);
  });

  it('should gracefully handle undefined input', () => {
    expect(generateStartingBoard()).toStrictEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });
});

describe('prettifyRow', () => {
  it('should join rows seperated by pipes', () => {
    const array = ['X', 'O', 'X'];
    const result = prettifyRow(array);
    expect(result).toBe(' X | O | X ');
  });

  it('should still work if length is less than 3', () => {
    const array = ['X', 'O'];
    expect(prettifyRow(array)).toBe(' X | O ');
  });

  it('should maintain case', () => {
    const array = ['X', 'o', 'X'];
    expect(prettifyRow(array)).toBe(' X | o | X ');
  });
});

describe('prettifyBoard', () => {
  it('should return a prettified board', () => {
    const board = [['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'X', ' ']];
    expect(prettifyBoard(board)).toBe(` X | O | X \n---|---|---\n X | X | O \n---|---|---\n O | X |   `);
  });
  
  it('should maintain whitespace', () => {
    const board = [['', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(prettifyBoard(board)).toBe(`  |   |   \n---|---|---\n   |   |   \n---|---|---\n   |   |   `);
  });
});

describe('updateBoard', () => {
  it('should add players to board', () => {
    const board = [['', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const update = updateBoard(board, [1, 1], 'X');
    expect(update).toStrictEqual([['', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
  });
});