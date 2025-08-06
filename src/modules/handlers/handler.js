import { BoardUI, CellUI, markCell, resetBoardUI } from "../ui/boardUI.js";
import { Game } from "../core/game.js";

export const cellClickHandler = function(row,col){
    const game = Game();
    const board = game.getBoard();

    if(board.isSquareEmpty(row,col)){
        const symbol = game.getCurrentPlayer().getSymbol();
        game.makeMove(row,col);
        markCell(row,col,symbol);

        const gaemState = game.getState();
        if(gaemState.won === true){
            setTimeout(()=>{
                showGameOverDialog();
            },0);
        }
    }
}

const showGameOverDialog = function(){
    const dialog = document.getElementById("game-over");
    dialog.showModal();
    
    const closeButton = document.getElementById("close-dialog");
    const playAgainButton = document.getElementById("play-again");
    
    closeButton.addEventListener("click",()=>{
        dialog.close();
    });
    
    playAgainButton.addEventListener("click",()=>{
        resetGameHandler();
        dialog.close();
    });
}

export const settingsHandler = function(){
    const settingsMenu = document.getElementsByClassName("settings-menu")[0];
    settingsMenu.classList.toggle("show");
}

export const scoreBoardHandler = function(){
    const scoreMenu = document.getElementsByClassName("scoreboard-menu")[0];
    scoreMenu.classList.toggle("show");
}

export const resetGameHandler = function(){
    Game().resetBoard();
    resetBoardUI();
}

export const moveBackwardHandler = function(){
    const lastMove = Game().moveBackward();
    if(lastMove){
        markCell(lastMove.row,lastMove.col,'');
    }
}

export const moveForowardHandler = function(){
    const lastMove = Game().moveForoward();
    if(lastMove){
        markCell(lastMove.row,lastMove.col,lastMove.symbol);
    }
}
