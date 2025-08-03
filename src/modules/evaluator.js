export const evaluate = function(gameBoard){

    /* There are 8 possible cases of winning */
    /* 3 rows, 3 columns and 2 diagonals */

    const board = gameBoard.board;
    //check rows
    if(board[0][0]==board[0][1] && board[0][1]==board[0][2] && board[0][0]!=='') 
        return {won: true, symbol: board[0][0], square1: [0,0], square2: [0,1], square3: [0,2]};
    if(board[1][0]==board[1][1] && board[1][1]==board[1][2] && board[1][0]!=='') 
        return {won: true, symbol: board[1][0], square1: [1,0], square2: [1,1], square3: [1,2]};
    if(board[2][0]==board[2][1] && board[2][1]==board[2][2] && board[2][0]!=='') 
        return {won: true, symbol: board[2][0], square1: [2,0], square2: [2,1], square3: [2,2]};
    
    //check columns
    if(board[0][0]==board[1][0] && board[1][0]==board[2][0] && board[0][0]!=='') 
        return {won: true, symbol: board[0][0], square1: [0,0], square2: [1,0], square3: [2,0]};
    if(board[0][1]==board[1][1] && board[1][1]==board[2][1] && board[0][1]!=='') 
        return {won: true, symbol: board[0][1], square1: [0,1], square2: [1,1], square3: [2,1]};
    if(board[0][2]==board[1][2] && board[1][2]==board[2][2] && board[0][2]!=='') 
        return {won: true, symbol: board[0][2], square1: [0,2], square2: [1,2], square3: [2,2]};
    
    //check diagonals
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=='') 
        return {won: true, symbol: board[0][0], square1: [0,0], square2: [1,1], square3: [2,2]};
    if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][2]!=='') 
        return {won: true, symbol: board[1][1], square1: [0,2], square2: [1,1], square3: [2,0]};
    
    return {won: false};
     
}