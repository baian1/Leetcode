import { expect } from "chai";

/**
 * 矩阵中的路径
 * @param board
 * @param word
 */
function exist(board: string[][], word: string): boolean {
  const isUsed: boolean[][] = [];
  for (let row of board) {
    isUsed.push(new Array(row.length).fill(false));
  }

  const chars = word.split("");
  function find(position: [x: number, y: number], charIndex: number): boolean {
    if (chars.length === charIndex) {
      return true;
    }
    let [x, y] = position;
    x = clamp(x, [0, board.length - 1]);
    y = clamp(y, [0, board[0].length - 1]);
    let char = chars[charIndex];
    if (isUsed[x][y] || board[x][y] !== char) {
      return false;
    }
    isUsed[x][y] = true;

    let res =
      find([x - 1, y], charIndex + 1) ||
      find([x, y - 1], charIndex + 1) ||
      find([x + 1, y], charIndex + 1) ||
      find([x, y + 1], charIndex + 1);

    isUsed[x][y] = false;
    return res;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (find([i, j], 0)) {
        return true;
      }
    }
  }
  return false;
}

function clamp(num: number, [min, max]: [number, number]) {
  return Math.max(Math.min(num, max), min);
}

it("矩阵中的路径", () => {
  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED"
    )
  ).equal(true);
  expect(exist([["a", "a"]], "aa")).equal(true);
});

export {};
