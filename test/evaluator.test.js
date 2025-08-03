import { evaluate } from "../src/modules/evaluator.js";
import { Board } from "../src/modules/board.js";

const board = [
    ['','',''],
    ['','',''],
    ['','',''],
]

const gameBoard = Board();
gameBoard.board = board; 

test("evalute empty board",()=>{
    expect(evaluate(gameBoard)).toEqual({won:false});
    gameBoard.board = [['x','x','x'],['','',''],['','','']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [0,0], square2: [0,1], square3: [0,2]});
});

test("evalute board row1",()=>{
    gameBoard.board = [['x','x','x'],['','',''],['','','']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [0,0], square2: [0,1], square3: [0,2]});
});

test("evalute board row2",()=>{
    gameBoard.board = [['','',''],['x','x','x'],['','','']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [1,0], square2: [1,1], square3: [1,2]});
});

test("evalute board row3",()=>{
    gameBoard.board = [['','',''],['','',''],['x','x','x']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [2,0], square2: [2,1], square3: [2,2]});
});

test("evalute board col1",()=>{
    gameBoard.board = [['x','',''],['x','',''],['x','','']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [0,0], square2: [1,0], square3: [2,0]});
});

test("evalute board col2",()=>{
    gameBoard.board = [['','x',''],['','x',''],['','x','']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [0,1], square2: [1,1], square3: [2,1]});
});

test("evalute board col3",()=>{
    gameBoard.board = [['','','x'],['','','x'],['','','x']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [0,2], square2: [1,2], square3: [2,2]});
});

test("evalute board diaganol1",()=>{
    gameBoard.board = [['x','',''],['','x',''],['','','x']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [0,0], square2: [1,1], square3: [2,2]});
});

test("evalute board diagonal2",()=>{
    gameBoard.board = [['','','x'],['','x',''],['x','','']];
    expect(evaluate(gameBoard)).toEqual({won:true, symbol: 'x', square1: [0,2], square2: [1,1], square3: [2,0]});
});