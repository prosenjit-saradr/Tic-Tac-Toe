import { Board } from "../src/modules/board.js";

const board = [
    ['o','','x'],
    ['','o','x'],
    ['','','x'],
]

test("is squre empty",()=>{
    const gameBoard = Board();
    gameBoard.board = board;
    expect(gameBoard.isSquareEmpty(2,1)).toBe(true);
});

test("mark board square",()=>{
    const gameBoard = Board();
    gameBoard.board = board;
    gameBoard.markSqure(0,1,'x');
    expect(gameBoard.getSquareMark(0,1)).toBe('x');
});