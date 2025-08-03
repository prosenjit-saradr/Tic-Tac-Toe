import { Board } from "./board.js"
export const Player = function(name,symbol){
    let _name = name;
    let _symbol = symbol;
    const player = {
        makeMove(row,col,board){
            if(board.isSquareEmpty(row,col)){
                board.markSquare(row,col,symbol);
            }
        },

        setName(name){
            _name = name;
        },
        
        setSymbol(symbol){
            _symbol = symbol;
        },

        getName(){
            return _name;
        },

        getSymbol(){
            return _symbol;
        },
    }
    
    return player;
}