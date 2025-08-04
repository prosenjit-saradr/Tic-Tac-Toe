import { Game } from "./modules/core/game.js";

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


const btnSettings = document.getElementById("settings");
btnSettings.addEventListener("click",()=>{
    const settingsMenu = document.getElementsByClassName("settings-menu")[0];
    settingsMenu.classList.toggle("show");
});

const btnScoreBoard = document.getElementById("score");
btnScoreBoard.addEventListener("click",()=>{
    const scoreMenu = document.getElementsByClassName("scoreboard-menu")[0];
    scoreMenu.classList.toggle("show");
});