import { Board } from "./modules/board.js";
import { evaluate } from "./modules/evaluator.js";

const gameBoard = Board();
console.log(evaluate(gameBoard));