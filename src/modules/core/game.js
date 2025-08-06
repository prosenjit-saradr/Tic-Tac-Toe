import { Board } from "./board.js";
import { Player } from "./player.js";
import { evaluate } from "./evaluator.js";

let _gameIstance = null;

export const Game = function(){
    if(_gameIstance !== null) return _gameIstance;

    const _board = Board();
    const _player1 = Player("playerA",'O');
    const _player2 = Player("playerB",'X');
    
    let _curPlayer = _player1;
    const _moves = [];
    let _curMoveIndex = -1;
    
    const _switchCurPlayer = function(){
        _curPlayer = _curPlayer===_player1 ? _player2 : _player1;
    };
    
    const _pushMove = function(move){
        _moves.push(move);
    };

    const _popMove = function(){
        if(_moves.length>0){
            _moves.pop();
        }
    };

    const game = {
        getCurrentPlayer(){
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
            
            
            /* If player had moved back previously then create new brach
               and delete all the moves of previous branch */

            let excessMove = _moves.length-(_curMoveIndex+1);
            while(excessMove>0){
                _popMove();
                excessMove--;
            }

            _pushMove({row,col,symbol: _curPlayer.getSymbol()});
            _curPlayer.makeMove(row,col,_board);
            _switchCurPlayer();
            _curMoveIndex++;
        },
        
        moveForoward(){
            if(_curMoveIndex+1 < _moves.length){
                const move = _moves[++_curMoveIndex];
                _board.markSquare(move.row,move.col,move.symbol);
                _switchCurPlayer();
                return move;
            }
        },

        moveBackward(){
            if(_curMoveIndex > -1){
                const move = _moves[_curMoveIndex--];
                _board.markSquare(move.row,move.col,'');
                _switchCurPlayer();
                return move;
            }
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
        
        resetBoard(){
            _board.reset();
        }
    }
    
    _gameIstance = game;
    return game;
}