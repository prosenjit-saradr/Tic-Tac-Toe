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
            for(let row = 0; row < 3; ++row){
                for(let col = 0; col < 3; ++col){
                    board[row][col] = '';
                }
            }
       }
    }
    
    return gameBoard;
}