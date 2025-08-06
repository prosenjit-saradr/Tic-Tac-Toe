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