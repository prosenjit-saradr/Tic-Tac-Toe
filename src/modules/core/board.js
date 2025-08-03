export const Board = function(){
    let board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]
    
    const gameBoard = {
        board: board,
        
        isSquareEmpty(row,col){
            return board[row][col] === '';
        },
        
        markSquare(row,col,symbol){
            board[row][col] = symbol;
        },

        getSquareMark(row,col){
            return board[row][col];
        },

        reset(){
            board = [['','',''],['','',''],['','','']];
        }
    }
    
    return gameBoard;
}