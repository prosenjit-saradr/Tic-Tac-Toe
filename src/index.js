import { Game } from "./modules/game.js";

const game = Game();
game.setPlayerName('O',"prosenjit");
game.setPlayerName('X',"subhankar");

console.log(game);

game.makeMove(1,0);
game.makeMove(1,1);
game.makeMove(2,0);
game.makeMove(1,2);
game.makeMove(0,0);

console.log(game.getState());
console.log(game.getPlayerName('O'));
console.log(game.getPlayerName('X'));
console.log(game.getBoard());