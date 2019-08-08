const { play, nextPlayer } = require('./play');
const { displayWin, } = require('./ui.js');

describe('nextPlayer', () => {
  it('should update X player to O', () => {
    const currPlayer = 'X';
    expect(nextPlayer(currPlayer)).toBe('O');
  });

  it('should update O player to X', () => {
    const currPlayer = 'O';
    expect(nextPlayer(currPlayer)).toBe('X');
  });
});

describe('play', () => {
  it('should provide win message when 3 are in a row', () => {
    const board = [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
    const player = 'X';
    // const result = console.log(`Congratulations! ${player} wins`);
    const test = play(board, player);
    expect(test).toBe(displayWin(board, player));
  });
});