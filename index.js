#!usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
var gameNumber = 1;
var playerWins = 0;
var computerWins = 0;
function main() {
    console.log(`Round Number ${gameNumber}`);
    let playerNumber = +prompt("Please Enter your Number between 1-10: ");
    console.log(`Player Guessed ${playerNumber}`);
    let computerNumber = Math.floor((Math.random() * 10) - 1);
    console.log(`Computer Number is ${computerNumber}`);
    if (isNaN(playerNumber)) {
        console.clear();
        console.log("Please input (0-9) number");
        playRepeat();
    }
    else if (playerNumber === computerNumber) {
        playerWins++;
    }
    else {
        computerWins++;
    }
    console.log(`Player Wins = ${playerWins}`);
    console.log(`Computer Wins = ${computerWins}`);
    gameNumber++;
    playRepeat();
    function playRepeat() {
        let playAgain = prompt("Want to play again Y/N: ");
        if (playAgain === "Y" || playAgain === "y") {
            main();
        }
    }
}
;
main();
console.log("Thanks for Playing the Number Guessing Game:");
