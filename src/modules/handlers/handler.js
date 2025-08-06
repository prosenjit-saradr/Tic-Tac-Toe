import { BoardUI } from "../ui/boardUI.js";
import { Game } from "../core/game.js";

export const cellClickHandler = function(row,col){
    const boardUi = BoardUI();
    const cellUi = boardUi[row][col];
    const game = Game();
    const board = game.getBoard();

    if(board.isSquareEmpty(row,col)){
        const symbol = game.getCurrentPlayer().getSymbol();
        game.makeMove(row,col);
        if(symbol=='X'){
            cellUi.classList.toggle("cell-x");
        }else cellUi.classList.toggle("cell-o");

    }
}