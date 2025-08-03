import { Board } from "./board.js";
import { Player } from "./player.js";
import { evaluate } from "./evaluator.js";

export const Game = function(){
    const _board = Board();
    const _player1 = Player("playerA",'O');
    const _player2 = Player("playerB",'X');
    
    let _curPlayer = _player1;
    const _moves = [];
    
    const _switchCurPlayer = function(){
        _curPlayer = _curPlayer===_player1 ? _player2 : _player1;
    };
    
    const _pushMove = function(move){
        _moves.push(move);
    };

    const _popMove = function(){
        if(_moves.length>0) _moves.pop();
    };

    const game = {
        getCuurentPlayer(){
            return _curPlayer;
        },

        setCurrentPlayer(n){
            _curPlayer = n===1 ? _player1 : _player2;
        },
        
        getPlayerName(symbol){
            return symbol==='O' ? _player1.getName() : _player2.getName();
        },

        setPlayerName(symbol,name){
            symbol==='O' ? _player1.setName(name) : _player2.setName(name);
        },

        makeMove(row,col){
            if(!_board.isSquareEmpty(row,col)){
                console.log(`squre [${row},${col}] is already taken`);
                throw Error("Illegal move");
            }
            
            _curPlayer.makeMove(row,col,_board);
            _pushMove({row,col,symbol: _curPlayer.getSymbol()});
            _switchCurPlayer();
        },
        
        revertMove(){
            _popMove();
        },
        
        getState(){
            return evaluate(_board);
        },

        getBoard(){
            return _board;
        },
    }
    
    return game;
}