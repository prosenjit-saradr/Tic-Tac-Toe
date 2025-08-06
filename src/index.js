import { initBoardUI } from "./modules/ui/boardUI.js";
import { settingsHandler, scoreBoardHandler, resetGameHandler,
         moveBackwardHandler, moveForowardHandler
} from "./modules/handlers/handler.js";

// /* Init board UI */
initBoardUI();

/* Attach listner to setting and scoreboard button */
const btnShowScoreboard = document.getElementById("scoreboard");
const btnShowSettings = document.getElementById("settings");

btnShowSettings.addEventListener("click",settingsHandler);
btnShowScoreboard.addEventListener("click",scoreBoardHandler)

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click",resetGameHandler);

const btnBack = document.getElementById("back");
const btnNext = document.getElementById("next");

btnBack.addEventListener("click",()=>{
    console.log("back");
    moveBackwardHandler();
});

btnNext.addEventListener("click",()=>{
    console.log("next");
    moveForowardHandler();
});