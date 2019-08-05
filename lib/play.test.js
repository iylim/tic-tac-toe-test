const { play, nextPlayer } = require('./play');

describe('nextPlayer', () => {
  it('should update player based on who is currently playing', () => {
    const currPlayer = 'X';
    const nextPlayer = currPlayer => (currPlayer === 'X' ? 'O' : 'X');
  });
});

describe('play', () => {
  it('should recursively generate board, ask for move and update until game win or tie', () => {
    const board = [];
  });
});