export const Board = function(){
    const board = [
        ['o','','x'],
        ['','o','x'],
        ['','','x'],
    ]
    
    const GameBoard = {
        board: board,
        
        isSquareEmpty(row,col){
            return board[row][col] === '';
        },
        
        markSqure(row,col,symbol){
            board[row][col] = symbol;
        },

        getSquareMark(row,col){
            return board[row][col];
        },
    }
    
    return GameBoard;
}