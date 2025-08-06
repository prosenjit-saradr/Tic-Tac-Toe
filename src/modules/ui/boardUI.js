import { cellClickHandler } from "../handlers/handler.js";
const board = [[],[],[]];

export const initBoardUI = function(){
    for(let row = 0; row < 3; ++row){
        for(let col = 0; col < 3; ++col){
            const cell = document.getElementById(`cell${row}${col}`);
            cell.addEventListener("click",()=>{
                cellClickHandler(row,col);
            });
            board[row].push(cell);
        }
    }
}

export const BoardUI = function(){
    return board;
}

export const CellUI = function(row,col) {
    return board[row][col];
}

const resetCellUI = function(row,col){
    board[row][col].classList.remove("cell-x");
    board[row][col].classList.remove("cell-o");
}

export const markCell = function(row,col,symbol){
    if(symbol==='X'){
        CellUI(row,col).classList.toggle("cell-x")
    }else if(symbol==='O'){
        CellUI(row,col).classList.toggle("cell-o");
    }else{
        resetCellUI(row,col);
    }
}

export const resetBoardUI = function(){
    for(let row = 0; row < 3; row++){
        for(let col = 0; col < 3; col++){
            resetCellUI(row,col);
        }
    }
}